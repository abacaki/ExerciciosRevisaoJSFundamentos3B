// EXERCÍCIO 23 - SPREAD EM ARRAY
// Crie um array de convidados da família e outro de amigos.
// Utilize Spread para criar um terceiro array contendo todos os convidados.
//
// Escreva sua solução abaixo:

const convidadosFam = ["Luci", "Walter", "Joana"];
const amigos = ["Julia", "Fernanda", "Victória"];

const convidados = [...convidadosFam,...amigos];
console.log(convidados);