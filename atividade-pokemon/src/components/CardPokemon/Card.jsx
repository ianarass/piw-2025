import { useNavigate } from 'react-router-dom'
import './Card.css'

export default function CardPokemon({pokemon}){
    const navegador = useNavigate();

    function mostrarDetalhes(){
        navegador(`/pokemon/${pokemon.id}`)

    }

    return(
        <div onClick={mostrarDetalhes} className='card-container'>
            <img src={pokemon.imagem}/>
        <div>
            <p>{pokemon.numero}</p>
            <p>{pokemon.nome}</p>
        </div>
    </div>
    )
}