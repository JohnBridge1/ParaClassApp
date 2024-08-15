import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase = null;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase URL or Anon Key is not set");
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey);

  if (process.env.NODE_ENV === "development") {
    console.log("Supabase client created successfully!");
  }
}

export { supabase };
