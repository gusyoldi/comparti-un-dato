import React from "react";

export default function FactList({ facts, categories }) {
  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact fact={fact} categories={categories} key={fact.id} />
        ))}
      </ul>
    </section>
  );
}

function Fact({ fact, categories }) {
  return (
    <li className="fact">
      <p>
        {fact.text}
        <a
          className="source"
          href={fact.source}
          target="_blank"
          rel="noreferrer"
        >
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: categories.find((cat) => cat.name === fact.category)
            .color,
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button>👍 {fact.votesInteresting}</button>
        <button>😲 {fact.votesMindblowing}</button>
        <button>❌ {fact.votesFalse}</button>
      </div>
    </li>
  );
}
