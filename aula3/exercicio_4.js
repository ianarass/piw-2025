const vendas = [
    { produtos: 'Notebook', valor: 2500, quantidade: 2 },
    { produtos: 'Celular', valor: 1800, quantidade: 3 },
    { produtos: 'Mouse', valor: 350, quantidade: 5 },
    { produtos: 'Teclado', valor: 600, quantidade: 5 },
    { produtos: 'Monitor', valor: 2500, quantidade: 2 },
];

const totalVendas = vendas.map(item => item.valor * item.quantidade).reduce((total, valor) => total + valor, 0);

console.log(`O valor total das vendas é: R$ ${totalVendas}`);

/*let totalVendas = vendas.reduce(acumulador, iterador) => {
     return acumulador = (iterador.valor * iterador.quantidade)
}*/