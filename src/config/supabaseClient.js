import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL or Anon Key is not set");
}

let supabase;

try {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} catch (error) {
  throw new Error(`Failed to create Supabase client: ${error.message}`);
}

if (process.env.NODE_ENV === "development") {
  console.log("Supabase client created successfully!");
}

export { supabase };
