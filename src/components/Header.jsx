import React from "react";

export default function Header({ logo, showForm, setShowForm }) {
  return <header className="header">
  <div className="logo">
    <img src={logo} alt="Today I learned" />
    <h1>Compartí un dato</h1>
  </div>
  <button
    className="btn btn-large btn-open"
    onClick={() => setShowForm((show) => !show)}
    >
    {showForm ? "Cerrar" : "Publicá un dato"}
  </button>
</header>
}
