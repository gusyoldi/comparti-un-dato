import React, {useState} from "react";
import supabase from "../supabase";

export default function FactList({ facts, categories, setFacts}) {
  if (facts.length === 0)
    return (
      <p className="message">
        Aún no existen datos para esta categoría, Publicá el tuyo!✌
      </p>
    );

  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} categories={categories} setFacts={setFacts} />
        ))}
      </ul>
    </section>
  );
}

function Fact({ fact, categories, setFacts }) {
const [isUpdating, setIsUpdating] = useState(false)
const isDisputed = (fact.votesInteresting + fact.votesMindblowing) < fact.votesFalse

  async function handleVote(columnName) {
    setIsUpdating(true)
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ [columnName]: fact[columnName] + 1 })
      .eq("id", fact.id)
      .select();
    setIsUpdating(false)
    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
      );
      
  }

  return (
    <li className="fact">
      <p>
        {isDisputed ? <span className="disputed">[⛔POCO CONFIABLE]</span> : null}
        {fact.text}
        <a
          className="source"
          href={fact.source}
          target="_blank"
          rel="noreferrer"
        >
          (Fuente)
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
        <button onClick={() => handleVote("votesInteresting")} disabled={isUpdating}>👍 {fact.votesInteresting}</button>
        <button onClick={() => handleVote("votesMindblowing")} disabled={isUpdating}>😲 {fact.votesMindblowing}</button>
        <button onClick={() => handleVote("votesFalse")} disabled={isUpdating}>❌ {fact.votesFalse}</button>
      </div>
    </li>
  );
}
