import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bcxumgmcteeydrqzepgy.supabase.co/";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjeHVtZ21jdGVleWRycXplcGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5Mzg1MDksImV4cCI6MjAzODUxNDUwOX0.t1iz9ysYjrKjFaVmYPP6tJInOOeWmxM5YDV_5miSv-8";
console.log(supabaseUrl, supabaseAnonKey);

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
