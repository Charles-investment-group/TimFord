// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';
import { env } from '$env/static/public';

const supabaseUrl = env.PUBLIC_SUPABASE_URL ?? '';
const supabaseKey = env.PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? '';

export const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

// Helper example to call supabase safely
export async function safeFrom(table) {
  if (!supabase) return { data: null, error: null }; // or return a sensible default
  return supabase.from(table);
}
