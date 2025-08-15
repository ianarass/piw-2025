import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";
import Card from "../components/CardPokemon/Card"
import './ListarPokemons.css'

export default function ListarPokemons(){
  const [pokemons,setPokemons] = useState([]);

  /*snapshot*/
  // dadosValor são os valores do que ta na tabela
  useEffect(()=> {
    const pokemonsRef = ref(db, "pokemons");
    onValue(pokemonsRef, (dadosTabela) => {
    const dadosValor = dadosTabela.val();

    let pokemonsTemp = [];

    for(let pokemonId in dadosValor){
      pokemonsTemp.push({
        id: pokemonId,
        ...dadosValor[pokemonId]
      })
    }
    setPokemons(pokemonsTemp)
  })

  },[])

return (
    <main className="container-listar">
      <h2>Pokémons</h2>
      {pokemons.map(pokemon =>{
       return <Card key ={pokemon.id} pokemon={pokemon}/>
      })}
    </main>
  );
}

