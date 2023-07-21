import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { RandomPokemon } from './pages/RandomPokemon';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">

    <header><h1>Pokemon Site</h1></header>
      <Router> 
        <div> NAVBAR 
          <Link to="/"> Pokemon random </Link>
          <Link to="/Home"> Home </Link>
        </div>
        <Routes>
          <Route path="/" element={<RandomPokemon />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </Router>
      {/* <RandomPokemon></RandomPokemon> */}
    </div>
  );
}

export default App;
