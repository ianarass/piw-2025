import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import{ onValue, ref } from "firebase/database";
import { db } from "../firebase";
import './DetalhesPokemons.css'

export default function DetalhesPokemons(){

  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
  const pokemonsRef = ref(db , `pokemons/${id}`);

  onValue(pokemonsRef, (dadosTabela) => {
    setPokemon(dadosTabela.val())
  })
  }, [id])

  if(pokemon === null) return <p>Carregando...</p>

return (
    <div>
      <div className="imagem">
        <img src={pokemon.imagem}/>
      </div>
      <div className="numero">
        <h2>{pokemon.numero}</h2>
      </div>
      <div className="nome">
        <h2>{pokemon.nome}</h2>
      </div>
      <div className="descricao">
        <h2>{pokemon.descricao}</h2>
      </div>
      <div className="tipos">
        <h2>{pokemon.tiposSelecionados}</h2>
      </div>
      <div className="natureza">
        <h2>{pokemon.natureza}</h2>
      </div>
      <div className="fraqueza">
        <h2>{pokemon.fraqueza}</h2>
      </div>
      <div className="evolucao">
        <h2>{pokemon.evolucao}</h2>
      </div>
      <div className="evolucao2">
        <h2>{pokemon.evolucao2}</h2>
      </div>
      <div className="treinador">
        <h2>{pokemon.treinador}</h2>
      </div>
    </div>
  );
}