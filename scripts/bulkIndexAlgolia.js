// // scripts/bulkIndexAlgolia.js
// import algoliasearch from "algoliasearch";
// import { createClient } from "@supabase/supabase-js"; // or your PG client

// (async function () {
//   try {
//     // Initialize Supabase
//     const supabase = createClient(
//       process.env.SUPABASE_URL,
//       process.env.SUPABASE_SERVICE_ROLE_KEY // Private key, not exposed to public
//     );

//     // Fetch data from Supabase
//     const { data, error } = await supabase
//       .from("classificationdata")
//       .select("*");

//     if (error) {
//       console.error("Error fetching data from Supabase:", error);
//       process.exit(1);
//     }

//     if (!data || data.length === 0) {
//       console.log("No data found in the classificationdata table.");
//       process.exit(0);
//     }

//     console.log(`Fetched ${data.length} records from Supabase`);

//     // Initialize Algolia
//     const client = algoliasearch(
//       process.env.ALGOLIA_APP_ID,
//       process.env.ALGOLIA_ADMIN_API_KEY
//     );
//     const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME);

//     // Prepare records for indexing
//     const records = data.map((item) => ({
//       objectID: item.id, // Algolia requires a unique objectID
//       event_code: item.event_code,
//       class_code: item.class_code,
//       name: item.name,
//       npc: item.npc,
//       region: item.region,
//       birth: item.birth,
//       result: item.result,
//       date: item.date,
//       city: item.city,
//       country: item.country,
//       event_name: item.event_name,
//       wind: item.wind,
//       rank: item.rank,
//     }));

//     console.log("Indexing data to Algolia...");

//     // Index data to Algolia
//     await index.saveObjects(records);
//     console.log("Bulk indexing completed successfully!");

//     process.exit(0);
//   } catch (err) {
//     console.error("Unexpected error:", err);
//     process.exit(1);
//   }a
// })();

// const supabase = require("@supabase/supabase-js");
// const algoliasearch = require("algoliasearch");

// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
// const algoliaAppId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
// const algoliaApiKey = process.env.ALGOLIA_ADMIN_API_KEY;

// const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
// const algoliaClient = algoliasearch(algoliaAppId, algoliaApiKey);

// // Define the function to migrate data from Supabase to Algolia
// async function migrateData() {
//   try {
//     // Fetch data from Supabase
//     const { data: rows, error } = await supabaseClient
//       .from("classificationdata")
//       .select("*");

//     if (error) {
//       console.error(error);
//       return;
//     }

//     // Transform data into Algolia format
//     const algoliaObjects = rows.map((row) => ({
//       objectID: item.id, // Algolia requires a unique objectID
//       event_code: item.event_code,
//       class_code: item.class_code,
//       name: item.name,
//       npc: item.npc,
//       region: item.region,
//       birth: item.birth,
//       result: item.result,
//       date: item.date,
//       city: item.city,
//       country: item.country,
//       event_name: item.event_name,
//       wind: item.wind,
//       rank: item.rank,
//     }));

//     // Save objects to Algolia index
//     const { objectIDs, taskID } = await algoliaClient
//       .initIndex("results_index")
//       .saveObjects(algoliaObjects);

//     console.log(
//       `Data migration complete. ${objectIDs.length} objects indexed.`
//     );
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Run the data migration function
// migrateData();

import algoliasearch from "algoliasearch";
import { supabase } from "../src/config/supabaseClient.js";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const algoliaAppId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const algoliaApiKey = process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY;
const results_index = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

// Initialize Algolia client
const algoliaClient = algoliasearch(algoliaAppId, algoliaApiKey);
const index = algoliaClient.initIndex(results_index);

// Initialize Supabase client
// const supabase = createClient(supabaseUrl, supabaseKey);

// Function to synchronize data from Supabse to Algolia
async function syncData() {
  // Fetch initial data from Supbase and push it to Algolia
  const { data: records } = await supabase
    .from("classificationdata")
    .select("*");
  const objectsToIndex = records.map((record) => ({
    objectID: record.id,
    ...record.data,
  }));

  await index.saveObjects(objectsToIndex);

  // // Listen for changes in the table using Supbase Realtime subscription feature
  // const realtimeSubscription = supbase
  //   .from("table_name")
  //   .on("*", (payload) => {
  //     if (payload.eventType === "INSERT") {
  //       // Insert new record to Algolia index when a new record is added in Supbase
  //       const objectToAdd = {
  //         objectID: payload.new.id,
  //         ...payload.new.data,
  //       };

  //       index.saveObject(objectToAdd);
  //     }

  //     if (payload.eventType === "UPDATE") {
  //       // Update existing record in Algolia index when a record is updated in Supbase
  //       const objectToUpdate = {
  //         objectID: payload.new.id,
  //         ...payload.new.data,
  //       };

  //       index.partialUpdateObject(objectToUpdate);
  //     }

  //     if (payload.eventType === "DELETE") {
  //       // Delete record from Algolia index when a record is deleted in Supbase
  //       const objectToDelete = payload.old.id;

  //       index.deleteObject(objectToDelete);
  //     }
  //   })
  //   .subscribe();

  // Keep the subscription active until you want to stop syncing
  // To stop, call `realtimeSubscription.unsubscribe()`
}

// Call the syncData function to start syncing

syncData();
