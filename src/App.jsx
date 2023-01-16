import "./style.css";
// import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";
import CategoryFilter from "./components/CategoryFilter";
import FactList from "./components/FactsList";
import { useState } from "react";

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Today I learned" />
          <h1>Today I Learned</h1>
        </div>
        <button className="btn btn-large btn-open">Compartí un dato</button>
      </header>
      <Counter />
      <NewFactForm />

      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(8);

  return (
    <div>
      <span style={ { fontSize: "40px" } }>{ count }</span>
      <button onClick={ () => setCount((count) => count + 1) } className="btn btn-large">
        +
      </button>
    </div>
  );
}

export default App;
