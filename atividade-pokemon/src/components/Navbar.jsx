import { Link } from "react-router-dom";
import './NavBar.css' 

export default function Navbar() {
  return (
    <header className="navbar">
      <h3>Pokedex</h3>
    <nav>
      {/* <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/listar">Listar Pokémons</a></li>
        <li><a href="/cadastrar">Cadastrar Pokémon</a></li>
      </ul> */}
        <div className="listar">
            <Link to="/">Listar Pokémons</Link>
        </div>
        <div className="cadastrar">
            <Link to="/cadastrar">Cadastrar Pokémon</Link>
        </div>
    </nav>
    </header>
  );
}