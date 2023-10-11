import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bdxatmylkohsbmqstjjz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkeGF0bXlsa29oc2JtcXN0amp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyMzgyNDgsImV4cCI6MjAxMTgxNDI0OH0.Ikl3D61EZDeivGPs2MEG2t0HDkorJebnq_nMh89vLkU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
