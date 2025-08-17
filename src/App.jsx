import { useEffect, useState } from "react";
import LOGO_IMG from "./assets/images/logo.png";
import CategoryFilter from "./components/CategoryFilter";
import FactList from "./components/FactsList";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";
import "./style.css";
import supabase from "./supabase";

const CATEGORIES = [
  { name: "technology", color: "#3b82f6", label: "Tecnología" },
  { name: "science", color: "#16a34a", label: "Ciencia" },
  { name: "finance", color: "#ef4444", label: "Finanzas" },
  { name: "society", color: "#eab308", label: "Sociedad" },
  { name: "entertainment", color: "#db2777", label: "Entretenimiento" },
  { name: "health", color: "#14b8a6", label: "Salud" },
  { name: "history", color: "#f97316", label: "Historia" },
  { name: "news", color: "#8b5cf6", label: "Noticias" },
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    async function getFacts() {
      setIsLoading(true);
      let query = supabase.from("facts").select("*");

      if (currentCategory !== "all")
        query = query.eq("category", currentCategory);

      const { data: facts, error } = await query
        .order("votesInteresting", { ascending: false })
        .limit(100);

      if (!error) setFacts(facts);
      else alert("Hubo un error al cargar los datos :(");
      setIsLoading(false);
    }
    getFacts();
  }, [currentCategory]);

  return (
    <>
      <Header logo={LOGO_IMG} showForm={showForm} setShowForm={setShowForm} />

      {showForm ? (
        <NewFactForm
          categories={CATEGORIES}
          setFacts={setFacts}
          setShowForm={setShowForm}
        />
      ) : null}

      <main className="main">
        <CategoryFilter
          categories={CATEGORIES}
          setCurrentCategory={setCurrentCategory}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <FactList facts={facts} categories={CATEGORIES} setFacts={setFacts} />
        )}
      </main>
    </>
  );
}

function Loader() {
  return <p className="message">Cargando datos... ⚙⚙⚙</p>;
}

export default App;
