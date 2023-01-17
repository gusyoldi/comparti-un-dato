import React from "react";
import { useState } from "react";

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
  const [source, setSource] = useState("http://ejemplo.com");
  const [category, setCategory] = useState("");
  const textLength = 200 - text.length;

  function handleSubmit(e) {
    e.preventDefault();
    console.log(text, source, category);

    if (text.length <= 200 && isValidHttpUrl(source) && category)
      console.log("Data is correct");

    const newFact = {
      id: Math.round(Math.random() * 10000000),
      text,
      source,
      category,
      votesInteresting: 0,
      votesMindblowing: 0,
      votesFalse: 0,
      createdIn: new Date().getFullYear(),
    };

    setFacts((facts) => [newFact, ...facts]);

    setText("");
    setSource("");
    setCategory("");

    setShowForm(false);
  }

  return (
    <form className="fact-form">
      <input
        type="text"
        placeholder="Compartí un dato con el mundo..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <span>{textLength}</span>
      <input
        type="text"
        placeholder="Link de la fuente..."
        onChange={(e) => setSource(e.target.value)}
        value={source}
      />
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="">Categorias:</option>
        {categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large" onClick={handleSubmit}>
        Publicar
      </button>
    </form>
  );
}
