import './style.css'
// import Logo from '../public/logo.png'

function App() {
  return (
    <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Today I learned" />
          <h1>Today I Learned</h1>
        </div>
        <button className="btn btn-large btn-open">Compartí un dato</button>
      </header>
  )
}

export default App;
