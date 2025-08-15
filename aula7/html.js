// html.js

// Função para buscar dados da API e exibir em um <p> com id="resultado"
async function carregarStaff() {
    try {
        const resposta = await fetch('https://hp-api.onrender.com/api/characters/staff');
        const dados = await resposta.json();

        // Exemplo: exibe o nome do primeiro staff no <p>
        const resultado = document.getElementById('resultado');
        if (dados.length > 0) {
            resultado.textContent = `Primeiro staff: ${dados[0].name}`;
        } else {
            resultado.textContent = 'Nenhum staff encontrado.';
        }
    } catch (erro) {
        document.getElementById('resultado').textContent = 'Erro ao carregar dados.';
        console.error(erro);
    }
}

// Chama a função quando a página termina de carregar
window.addEventListener('DOMContentLoaded', carregarStaff);