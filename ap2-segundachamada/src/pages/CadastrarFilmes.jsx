import { useState, useEffect } from "react";

export default function CadastrarFilmes() {
    const [filmes, setFilmes] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [ano, setAno] = useState("");
    const [duracaoMinutos, setDuracaoMinutos] = useState("");

    
    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/silobocarvalho/capacita-fsm2-portfolio-sidartha-carvalho/refs/heads/main/melhores-filmes.json"
        )
            .then((res) => res.json())
            .then((data) => setFilmes(data))
            .catch((err) => console.error("Erro ao buscar filmes:", err));
    }, []);

    
    function cadastrarFilme(e) {
        e.preventDefault();
        const novoFilme = {
            titulo,
            ano,
            duracaoMinutos,
        };
        setFilmes([...filmes, novoFilme]);
        setTitulo("");
        setAno("");
        setDuracaoMinutos("");
    }

    return (
        <main>
            <h2>Cadastro de Filmes</h2>
            <form onSubmit={cadastrarFilme}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Ano:</label>
                    <input
                        type="number"
                        value={ano}
                        onChange={(e) => setAno(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Duração (min):</label>
                    <input
                        type="number"
                        value={duracaoMinutos}
                        onChange={(e) => setDuracaoMinutos(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>

        </main>
    );
}
