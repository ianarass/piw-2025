
/*Regras e Funcionalidades:
1. Faça uso do useEffect() para gerenciar o preço, disparando uma alteração no valor
sempre que alguma das peças selecionadas mudar.
2. Faça uso do useState() quando necessário.
*/

import React,{ useState, useEffect} from 'react'
import './App.css'

// Estrutura de dados com as peças disponíveis
const pecas = {
processadores: [
{ id: 'p1', nome: 'Intel Core i5', preco: 850.00 },
{ id: 'p2', nome: 'Intel Core i7', preco: 1350.00 },
{ id: 'p3', nome: 'AMD Ryzen 5', preco: 800.00 },
{ id: 'p4', nome: 'AMD Ryzen 7', preco: 1250.00 },
],
memoriasRAM: [
{ id: 'm1', nome: '8GB DDR4', preco: 250.00 },
{ id: 'm2', nome: '16GB DDR4', preco: 450.00 },
{ id: 'm3', nome: '32GB DDR4', preco: 900.00 },
],
armazenamentos: [
{ id: 'a1', nome: 'SSD 240GB', preco: 200.00 },
{ id: 'a2', nome: 'SSD 480GB', preco: 350.00 },
{ id: 'a3', nome: 'HD 1TB', preco: 300.00 },
]
}

const [processadorSelecionado, setProcessadorSelecionado] = useState(null);
  const [memoriaSelecionada, setMemoriaSelecionada] = useState(null);
  const [armazenamentoSelecionado, setArmazenamentoSelecionado] = useState(null);
  const [precoTotal, setPrecoTotal] = useState(0);

  function App() {

  useEffect(() => {
    let total = 0;
    if (processadorSelecionado) total += processadorSelecionado.preco;
    if (memoriaSelecionada) total += memoriaSelecionada.preco;
    if (armazenamentoSelecionado) total += armazenamentoSelecionado.preco;
    setPrecoTotal(total);
  }, [processadorSelecionado, memoriaSelecionada, armazenamentoSelecionado]);

  return (
    <div className="App">
      <h1>Monte seu PC</h1>

      <h2>Processador</h2>
      <ul>
        {pecas.processadores.map(proc => (
          <li key={proc.id}>
            <label>
              <input
                type="radio"
                name="processador"
                checked={processadorSelecionado?.id === proc.id}
                onChange={() => setProcessadorSelecionado(proc)}
              />
              {proc.nome} - R$ {proc.preco.toFixed(2)}
            </label>
          </li>
        ))}
      </ul>

      <h2>Memória RAM</h2>
      <ul>
        {pecas.memoriasRAM.map(mem => (
          <li key={mem.id}>
            <label>
              <input
                type="radio"
                name="memoria"
                checked={memoriaSelecionada?.id === mem.id}
                onChange={() => setMemoriaSelecionada(mem)}
              />
              {mem.nome} - R$ {mem.preco.toFixed(2)}
            </label>
          </li>
        ))}
      </ul>

      <h2>Armazenamento</h2>
      <ul>
        {pecas.armazenamentos.map(arma => (
          <li key={arma.id}>
            <label>
              <input
                type="radio"
                name="armazenamento"
                checked={armazenamentoSelecionado?.id === arma.id}
                onChange={() => setArmazenamentoSelecionado(arma)}
              />
              {arma.nome} - R$ {arma.preco.toFixed(2)}
            </label>
          </li>
        ))}
      </ul>

      <h2>Preço Total: R$ {precoTotal.toFixed(2)}</h2>
    </div>
  );
}

export default App;