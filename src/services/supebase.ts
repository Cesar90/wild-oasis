import { createClient } from "@supabase/supabase-js";
import { Database } from './database.types'
import { VITE_SUPBASE_KEY } from "../constants";

export const supabaseUrl = "https://cmldkxbdygndgxwqhwsh.supabase.co";
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabaseKey = VITE_SUPBASE_KEY;
console.log("supabaseKey", supabaseKey);
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;