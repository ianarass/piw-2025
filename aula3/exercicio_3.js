const livros = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: true },
    { titulo: "Turma da Mônica Jovem", autor: "Maurício de Souza", disponivel: false },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", disponivel: true },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", disponivel: false },
];

const livrosDisponiveis = livros.filter(livro => livro.disponivel);
console.log(livrosDisponiveis);