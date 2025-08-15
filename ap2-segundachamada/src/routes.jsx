import { Route, Routes } from "react-router-dom";
import ListarFilmes from './pages/ListarFilmes';
import CadastrarFilmes from './pages/CadastrarFilmes';
import DetalhesFilmes from './pages/DetalhesFilmes'

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={< ListarFilmes/>}/>
            <Route path="/cadastrar-filme" element={< CadastrarFilmes/>}/>
            <Route path="/detalhar" element={< DetalhesFilmes/>}/>
        </Routes>
    )
}