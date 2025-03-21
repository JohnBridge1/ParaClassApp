import algoliasearch from "algoliasearch";
import { supabase } from "../src/config/supabaseClient.js";

const algoliaAppId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const algoliaApiKey = process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY;
const results_index = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

const algoliaClient = algoliasearch(algoliaAppId, algoliaApiKey);
const index = algoliaClient.initIndex(results_index);

async function syncData() {
  try {
    console.log("Starting data sync with Algolia...");
    
    // Fetch all records from Supabase
    const { data: records, error } = await supabase
      .from("classificationdata")
      .select("*");

    if (error) {
      console.error("Error fetching data from Supabase:", error);
      return;
    }

    console.log(`Fetched ${records.length} records from Supabase`);

    // Create a map of unique classification codes
    const classificationMap = new Map();
    
    // First pass: collect all class codes and their associated data
    records.forEach(record => {
      if (!record.class_code) return;
      
      // Normalize the class code: trim whitespace, convert to uppercase, remove spaces
      const normalizedClassCode = record.class_code.trim().toUpperCase().replace(/\s+/g, '');
      
      // If we haven't seen this class code or the current record has more complete data
      if (!classificationMap.has(normalizedClassCode) || 
          (record.event_name && !classificationMap.get(normalizedClassCode).event_name)) {
        
        // Create a clean classification record
        const classRecord = {
          ...record,
          class_code: normalizedClassCode,
          record_type: 'classification'
        };
        
        classificationMap.set(normalizedClassCode, classRecord);
      }
    });
    
    // Convert the map to an array of classification records
    const classificationRecords = Array.from(classificationMap.values());
    
    console.log(`Created ${classificationRecords.length} unique classification records`);
    
    // Prepare records for indexing
    const objectsToIndex = classificationRecords.map((record, index) => ({
      objectID: `class_${index}_${record.class_code}`,
      class_code: record.class_code,
      sport_name: record.sport_name || record.event_name || '',
      event_name: record.event_name || '',
      brief_description: record.brief_description || `Paralympic classification ${record.class_code}`,
      record_type: 'classification'
    }));

    console.log(`Preparing to index ${objectsToIndex.length} unique classification records to Algolia`);

    // Clear existing index
    await index.clearObjects();
    console.log("Cleared existing index");

    // Configure index settings for better search
    await index.setSettings({
      searchableAttributes: [
        'class_code',
        'sport_name',
        'event_name'
      ],
      attributesForFaceting: [
        'class_code',
        'sport_name',
        'record_type'
      ],
      distinct: true,
    });
    console.log("Updated index settings");

    // Index new records
    const indexingResponse = await index.saveObjects(objectsToIndex);
    console.log(`Successfully indexed ${objectsToIndex.length} records to Algolia`);
    console.log("Indexing response:", indexingResponse);
    
  } catch (error) {
    console.error("Error during synchronization:", error);
  }
}

// Run the sync
syncData();
