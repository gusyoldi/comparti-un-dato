import React from "react";
import { useState } from "react";
import supabase from "../supabase";

// Validate Sources
function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

export default function NewFactForm({ categories, setFacts, setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const textLength = 200 - text.length;

  async function handleSubmit(e) {
    e.preventDefault();

    if (text.length <= 200 && isValidHttpUrl(source) && category) {
      console.log("Data is correct");
      setIsUploading(true);

      const { data: newFact, error } = await supabase
        .from("facts")
        .insert([{ text, source, category }])
        .select();
      if (!error) {
        setFacts((facts) => [newFact[0], ...facts]);
      } else {
        console.log(error);
      }

      setIsUploading(false);
      setText("");
      setSource("");
      setCategory("");

      setShowForm(false);
    } else {
      alert("El link debe tener este formato: http://ejemplo.com");
    }
  }

  return (
    <form className="fact-form">
      <input
        type="text"
        placeholder="Compartí un dato con el mundo..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={isUploading}
      />
      <span>{textLength}</span>
      <input
        type="text"
        placeholder="Link de la fuente..."
        onChange={(e) => setSource(e.target.value)}
        value={source}
        disabled={isUploading}
      />
      <select
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        disabled={isUploading}
      >
        <option value="">Categorias:</option>
        {categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button
        className="btn btn-large"
        onClick={handleSubmit}
        disabled={isUploading}
      >
        Publicar
      </button>
    </form>
  );
}
