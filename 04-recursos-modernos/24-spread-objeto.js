// EXERCÍCIO 24 - SPREAD EM OBJETO
// Crie um objeto cliente com nome e telefone.
// Utilize Spread para criar um novo objeto que mantenha os dados
// e acrescente a propriedade fidelidade com valor "Ouro".
//
// Escreva sua solução abaixo:

const cliente = {nome: "Guilherme", telefone: "12 3456-7890"};
console.log(cliente);

const dados = {...cliente, fidelidade: "Ouro"};

console.log(dados);