import './ListarFilmes.css'
import { useState, useEffect } from 'react';

export default function ListarFilmes() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        async function buscarFilmes() {
            setLoading(true);
            try {
                const resposta = await fetch("https://raw.githubusercontent.com/silobocarvalho/capacita-fsm2-portfolio-sidartha-carvalho/refs/heads/main/melhores-filmes.json");
                if (!resposta.ok) throw new Error("Erro ao buscar filmes");
                const dados = await resposta.json();
                setFilmes(dados); 
            } catch (error) {
                setErro(error.message);
            } finally {
                setLoading(false);
            }
        }
        buscarFilmes();
    }, []);

    return (
        <div>
        
            {loading && <p>Carregando filmes...</p>}
            {erro && <p style={{color: 'red'}}>{erro}</p>}

            <div className="cards-container">
                {filmes.map((filme, idx) => (
                    <div key={idx} className="card">
                        <h3>{filme.titulo || filme.title}</h3>
                        <p>Ano: {filme.ano || filme.year}</p>
                        <p>Duração: {filme.duracaoMinutos || filme.runtime} min</p>
                    </div>
                ))}
            </div> 
        </div>
    );
}
