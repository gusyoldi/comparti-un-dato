import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Today I learned" />
        <h1>Today I Learned</h1>
      </div>
      <button className="btn btn-large btn-open">Compartí un dato</button>
    </header>
  );
}
