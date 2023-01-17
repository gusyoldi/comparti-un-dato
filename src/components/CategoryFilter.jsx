import React from "react";

export default function CategoryFilter({ categories }) {
  return (
    <aside>
      <ul>
        <li>
          <button className="btn btn-all-categories">Todos</button>
        </li>
        {categories.map((cat, i) => (
          <li key={i} className="category">
            <button
              className="btn btn-category"
              style={{ backgroundColor: `${cat.color}` }}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
