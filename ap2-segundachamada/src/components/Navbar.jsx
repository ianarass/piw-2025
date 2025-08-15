import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar(){
    return(
        <header>
            <h4>Filmes</h4>
            <nav>
                <Link to="/">Listar</Link>
                <Link to="/cadastrar-filme">Cadastrar</Link>
            </nav>
        </header>
    )
}