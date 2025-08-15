import { Routes, Route } from 'react-router-dom';
import  ListarPokemons from './pages/ListarPokemons';
import  CadastrarPokemons from './pages/CadastrarPokemons';
import DetalhesPokemons from "./pages/DetalhesPokemons"

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<ListarPokemons />} />
        <Route path="/cadastrar" element={<CadastrarPokemons />} />
        <Route path= "/pokemon/:id" element={<DetalhesPokemons/>}/>   
    </Routes>
    
  );
}