// pages/api/reindex.js
import { supabase } from "../../config/supabaseClient";
import algoliasearch from "algoliasearch";

export default async function handler(req, res) {
  try {
    // 1. Get data from Supabase
    const { data: classifications, error } = await supabase
      .from("classificationdata")
      .select("event_code, class_code, npc, event_name");

    if (error) {
      throw new Error(error.message);
    }

    // 2. Initialize the Algolia client
    //    (Use your App ID and Admin Key on the SERVER side only)
    //    IMPORTANT: Do not use NEXT_PUBLIC_ prefix for your ADMIN key
    const client = algoliasearch(
      process.env.ALGOLIA_APP_ID, // from your .env.local
      process.env.ALGOLIA_ADMIN_API_KEY // from your .env.local
    );

    // 3. Reference (or create) the index in Algolia
    const index = client.initIndex("paralympic_classifications");

    // 4. Transform Supabase data to match Algolia’s record structure
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

    // 5. Push the data to Algolia
    await index.saveObjects(records);

    // 6. Return success
    return res.status(200).json({ message: "Data indexed successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}
