import React from "react";

export default function NewFactForm() {
  return (
    <form className="fact-form">
      <input type="text" placeholder="Compartí un hecho con el mundo..." />
      <span>200</span>
      <input type="text" placeholder="Link de la fuente..." />
      <select>
        <option value="">Categorías:</option>
        <option value="technology"></option>
        <option value="science"></option>
        <option value="finance"></option>
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  );
}
