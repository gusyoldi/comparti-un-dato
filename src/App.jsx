import "./style.css";
import LOGO_IMG from './assets/images/logo.png'
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";
import CategoryFilter from "./components/CategoryFilter";
import FactList from "./components/FactsList";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState(initialFacts);

  return (
    <>
      <Header logo={LOGO_IMG} showForm={showForm} setShowForm={setShowForm} />

      {showForm ? (
        <NewFactForm categories={CATEGORIES} setFacts={setFacts} setShowForm={setShowForm}/>
      ) : null}

      <main className="main">
        <CategoryFilter categories={CATEGORIES} />
        <FactList facts={facts} categories={CATEGORIES} />
      </main>
    </>
  );
}

export default App;

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];
