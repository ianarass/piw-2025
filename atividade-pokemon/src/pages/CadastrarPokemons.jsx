import { useState } from 'react';
import { push,ref,set } from "firebase/database"
import { db } from '../firebase'
import './CadastrarPokemons.css'

export default function CadastrarPokemons(){
    const tipos = ["agua", "fogo","terra", "ar"]

    const [numero, setNumero] = useState(0);
    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState(null);
    const [descricao, setDescricao] = useState("");     
    const [tiposSelecionados, setTiposSelecionados] = useState([]);
    const [natureza, setNatureza] = useState("");
    const [fraqueza, setFraqueza] = useState("");
    const [evolucao1, setEvolucao1] = useState("");
    const [evolucao2, setEvolucao2] = useState("");
    const [treinador, setTreinador] = useState("");

    async function cadastrarPokemon (event){
        event.preventDefault();
        try{
            const novoPokemon = {
                numero: numero,
                nome: nome,
                imagem: imagem,
                descricao: descricao,
                tipos: tiposSelecionados,
                natureza: natureza,
                fraqueza: fraqueza,
                evolucao1: evolucao1,
                evolucao2: evolucao2,
                treinador: treinador
            };
            const pokemonsRef = ref(db,"pokemons");

            const novoPokemonIdRef = push(pokemonsRef);
        
            await set(novoPokemonIdRef, novoPokemon);

        }catch(error){
            console.error("Erro ao cadastrar Pokémon:", error);
        }
    }

    function handleSelectTipos(tipo){
        if (tiposSelecionados.includes(tipo)){
            setTiposSelecionados(tiposSelecionados.filter(t=> t != tipo));
        } else {
            setTiposSelecionados([...tiposSelecionados,tipo])
        }
    }

return (
    <main>
        <form onSubmit ={cadastrarPokemon}>
            <div className='numero'>
                <label> Número </label>
                <input type="number" onChange={e => setNumero(e.target.value)} />
            </div>
            <div className='nome'>
                <label> Nome </label>
                <input type="text" onChange={e => setNome(e.target.value)}/>
            </div>
            <div className='imagem'>
                <label> Imagem </label>
                <input type="text" onChange={e => setImagem(e.target.value)} />
            </div>
            <div className='descriçao'>
                <label> Descrição </label>
                <textarea onChange={e => setDescricao(e.target.value)}/>
            </div>
            <div className='tipo'>
                <label> Tipo </label>
                {tipos.map(tipo => (
                    <div key={tipo}>
                        <input type="checkbox" value={tipo} onChange={() => handleSelectTipos(tipo)} />
                        <p>{tipo}</p>
                    </div>
                ))}
            </div>
            <div className='natureza'>
                <label> Natureza </label>
                <input type="text" onChange={e => setNatureza(e.target.value)} />
            </div>
            <div className='fraqueza'>
                <label> Fraqueza </label>
                <input type="text" onChange={e => setFraqueza(e.target.value)}/>
            </div>
            <div className='evolucao'>
                <label> Evolução 1 </label>
                <input type="text" onChange={e => setEvolucao1(e.target.value)}/>
            </div>
            <div className='evolucao2'>
                <label> Evolução 2 </label>
                <input type="text" onChange={e => setEvolucao2(e.target.value)}/>
            </div>
            <div className='treinador'>
                <label> Treinador </label>
                <input type="text" onChange={e => setTreinador(e.target.value)} />
            </div>
            <button type='submit'>Cadastrar</button>
        </form>
    </main>
  )
}
