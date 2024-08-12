// src/pages/test.js
export default function Test() {
  return (
    <div>
      <p>Supabase URL: {process.env.NEXT_PUBLIC_SUPABASE_URL}</p>
      <p>Supabase Anon Key: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}</p>
    </div>
  );
}
