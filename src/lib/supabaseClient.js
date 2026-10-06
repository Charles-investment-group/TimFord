import { createClient } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from "$env/static/public"

const supabaseUrl = "https://vyebuexjunoyervjsujq.supabase.co";
const supabaseKey = "sb_publishable_D4lM5Nh_jrXNHwT5h-Q1bw_wvNqyUEn";

export const supabase = createClient(supabaseUrl, supabaseKey);
