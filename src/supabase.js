import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zozawmwfltcefjohmbms.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvemF3bXdmbHRjZWZqb2htYm1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI3NTI4MDAsImV4cCI6MTk4ODMyODgwMH0.EYSj0WA67XG4z1kUi64qVnyGXdZJY6KNRUdLg5TPuDo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
