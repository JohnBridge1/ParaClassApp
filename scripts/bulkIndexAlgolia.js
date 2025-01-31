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

    // Remove duplicates before indexing
    const uniqueRecords = records.reduce((acc, current) => {
      const key = `${current.event_code}-${current.name}-${current.date}-${current.event_name}`;
      if (!acc[key]) {
        acc[key] = current;
      }
      return acc;
    }, {});

    const objectsToIndex = Object.values(uniqueRecords).map((record) => ({
      objectID: record.id,
      event_code: record.event_code,
      class_code: record.class_code,
      name: record.name,
      npc: record.npc,
      region: record.region,
      birth: record.birth,
      result: record.result,
      date: record.date,
      city: record.city,
      country: record.country,
      event_name: record.event_name,
      wind: record.wind,
      rank: record.rank
    }));

    console.log(`Preparing to index ${objectsToIndex.length} unique records to Algolia`);

    // Clear existing index
    await index.clearObjects();
    console.log("Cleared existing index");

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
