// pages/api/reindex.js

import { supabase } from "../../config/supabaseClient";
import algoliasearch from "algoliasearch";

// might_change
export default async function handler(req, res) {
  try {
    // 1. Get data from Supabase
    const { data: classifications, error } = await supabase
      .from("classificationdata")
      .select("*");

    if (error) {
      throw new Error(error.message);
    }

    // 2. Initialize the Algolia client
    //    (Use your App ID and Admin Key on the SERVER side only)
    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_ADMIN_API_KEY
    );

    // 3. Reference (or create) the index in Algolia
    const index = client.initIndex("paralympic_classifications");

    // 4. Transform Supabase data to match Algolia’s record structure
    const records = classifications.map((item) => ({
      objectID: item.id, // Algolia needs a unique ID
      name: item.name,
      description: item.description,
      imageUrl: item.image_url,
      // ... include any other fields you want
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
