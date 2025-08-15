import React, { useState, useEffect } from 'react';
import './App.css';

const filmes = [
  { id: 'a1b2c3d4-e5f6-7890-1234-567890abcdef', title: 'O Poderoso Chefão', description: 'Um clássico do cinema.' },
  { id: 'b2c3d4e5-f6a7-8901-2345-67890abcdef0', title: 'Um Sonho de Liberdade', description: 'A história da esperança.' },
  { id: 'c3d4e5f6-a7b8-9012-3456-7890abcdef01', title: 'A Origem', description: 'Um filme que mexe com a mente.' },
  { id: 'd4e5f6a7-b8c9-0123-4567-890abcdef012', title: 'Pulp Fiction', description: 'Um marco da década de 90.' },
  { id: 'e5f6a7b8-c9d0-1234-5678-90abcdef0123', title: 'Interestelar', description: 'Viagem no tempo e espaço.' },
  { id: 'f6a7b8c9-d0e1-2345-6789-0abcdef01234', title: 'Clube da Luta', description: 'Subversão e reflexão social.' },
  { id: 'a7b8c9d0-e1f2-3456-7890-abcdef012345', title: 'Matrix', description: 'Um mundo virtual surpreendente.' },
  { id: 'b8c9d0e1-f2a3-4567-8901-bcdef0123456', title: 'Forrest Gump', description: 'A vida é como uma caixa de chocolates.' },
  { id: 'c9d0e1f2-a3b4-5678-9012-cdef01234567', title: 'O Senhor dos Anéis: A Sociedade do Anel', description: 'O início de uma épica jornada.' },
  { id: 'd0e1f2a3-b4c5-6789-0123-def012345678', title: 'Star Wars: Uma Nova Esperança', description: 'A primeira aventura na galáxia muito, muito distante.' }
];

function App() {
  const [favoritos, setFavoritos] = useState([]);
  const [mensagemFavoritos, setMensagemFavoritos] = useState('');

  useEffect(() => {
    atualizarMensagemFavoritos();
  });

  const atualizarMensagemFavoritos = () => {
    const quantidade = favoritos.length;
    if (quantidade == 0) {
      setMensagemFavoritos('Você ainda não favoritou nenhum filme');
    } else if (quantidade <= 2) {
      setMensagemFavoritos(`Você tem alguns filmes favoritos!`);
    } else {
      setMensagemFavoritos(`Uau! Uma coleção impressionante de favoritos!`);
    }
  };

  const toggleFavorito = (id) => {
    setFavoritos(prev => 
      prev.includes(id) ? prev.filter(filmeId => filmeId !== id) : [...prev, id]
    );
  };

  return (
    <div className="App">
      <h1>Catálogo de Filmes</h1>
      
      <div className="favoritos-status">
        <p>{mensagemFavoritos}</p>
      </div>
      
      <h2>Todos os Filmes</h2>
      <ul className="filmes-lista">
        {filmes.map(filme => (
          <li 
            key={filme.id}
            className={`filme-item ${favoritos.includes(filme.id) ? 'favoritado' : ''}`}
          >
            <div className="filme-conteudo">
              <div className="filme-info">
                <h3>{filme.title}</h3>
                <p className="filme-descricao">{filme.description}</p>
              </div>
              <button
                onClick={() => toggleFavorito(filme.id)}
                className={`botao-favorito ${favoritos.includes(filme.id) ? 'favoritado' : ''}`}
              >
                {favoritos.includes(filme.id) ? 'Desfavoritar' : 'Favoritar'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;