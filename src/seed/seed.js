import dotenv from "dotenv";
import { initialFacts } from "./facts.js";
dotenv.config({ path: ".env.local" });

const { default: supabase } = await import("../supabase.js");

async function seedFacts() {
  const { data, error } = await supabase
    .from("facts")
    .insert(initialFacts)
    .select();

  if (error) console.error("Error inserting facts:", error);
  else console.log("Facts inserted successfully:", data);
}

seedFacts();
