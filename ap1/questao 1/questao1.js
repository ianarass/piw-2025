/*Crie 2 novos arrays (aprovados e comPendencias) usando o método filter(). O array aprovados
deve conter apenas os estudantes que possuem nota maior ou igual a 7.0, o array
comPendencias deve conter os estudantes que possuem nota inferior a 7.0.*/

const estudantes = [
{ nome: "Ana", nota: 8.5, turma: "A" },
{ nome: "Bruno", nota: 4.0, turma: "B" },
{ nome: "Carlos", nota: 6.0, turma: "A" },
{ nome: "Daniela", nota: 9.2, turma: "C" },
{ nome: "Eduardo", nota: 5.5, turma: "B" },
{ nome: "Fernanda", nota: 7.0, turma: "C" },
{ nome: "Gabriel", nota: 6.8, turma: "A" },
{ nome: "Helena", nota: 9.0, turma: "B" },
{ nome: "Igor", nota: 3.5, turma: "C" },
{ nome: "Juliana", nota: 7.5, turma: "A" },
{ nome: "Kleber", nota: 5.0, turma: "B" },
{ nome: "Larissa", nota: 8.0, turma: "C" },
{ nome: "Marcelo", nota: 6.2, turma: "A" },
{ nome: "Nathalia", nota: 4.8, turma: "B" },
{ nome: "Otávio", nota: 7.9, turma: "C" }
];

const aprovados = estudantes.filter(estudantes => estudantes.nota >= 7);
const comPendencias = estudantes.filter(estudantes => estudantes.nota < 7);

console.log("Aprovados:", aprovados);
console.log("Com pendências:", comPendencias);

//A partir do array filtrado no item anterior, utilize o método reduce() para calcular a nota média dos alunos aprovados e a média dos alunos comPendencias, após isso, imprimir no console*/ 
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//number.toFixed(x) -- qaunto maior o x, mais numeros

const mediaAprovados = aprovados.reduce((soma, aluno) => soma + aluno.nota, 0) / aprovados.length;
const mediaComPendencias = comPendencias.reduce((soma, aluno) => soma + aluno.nota, 0) / comPendencias.length;

console.log("Média-Aprovados", mediaAprovados.toFixed());
console.log("Média-Com-Pendencias", mediaComPendencias.toFixed());