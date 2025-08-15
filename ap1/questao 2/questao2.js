// html.js

// Função para buscar dados da API e exibir em um <p> com id="resultado"
import './questao2.css';

async function carregarCerveja() {
    try {
        const resposta = await fetch('https://api.sampleapis.com/beers/ale');
        const dados = await resposta.json();

        // Exemplo: exibe o nome do primeiro staff no <p>
        const resultado = document.getElementById('resultado');
        if (dados.length > 0) {
            resultado.textContent = `Primeira cerveja: ${dados[0].name}`;
        } else {
            resultado.textContent = 'Nenhuma cerveja encontrada.';
        }
    } catch (erro) {
        document.getElementById('resultado').textContent = 'Erro ao carregar dados.';
        console.error(erro);
    }
}

// Chama a função quando a página termina de carregar
window.addEventListener('DOMContentLoaded', carregarCerveja);