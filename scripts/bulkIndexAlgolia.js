// scripts/bulkIndexAlgolia.js
import algoliasearch from "algoliasearch";
import { createClient } from "@supabase/supabase-js"; // or your PG client

(async function () {
  try {
    // Initialize Supabase/PG
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY // or a suitable key
    );

    // Fetch data
    const { data, error } = await supabase
      .from("classificationdata")
      .select("*");

    if (error) throw error;

    // Initialize Algolia
    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_ADMIN_API_KEY
    );
    const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME);

    // Prepare data objects (make sure you include objectID as your record's unique field)
    const records = classifications.map((item) => ({
      objectID: item.id, // Algolia needs a unique ID
      event_code: item.event_code,
      class_code: item.class_code,
      name: item.name,
      npc: item.npc,
      region: item.region,
      birth: item.birth,
      result: item.result,
      date: item.date,
      city: item.city,
      country: item.country,
      event_name: item.event_name,
      wind: item.wind,
      rank: item.rank,
    }));

    // Batch upload
    await index.saveObjects(algoliaObjects);

    console.log("Bulk indexing completed successfully!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
