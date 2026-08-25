// EXERCÍCIO 16 - ALTERANDO PROPRIEDADE
// Crie um objeto ingresso com evento, preco e quantidade.
// Altere o preço e aumente a quantidade em duas unidades.
// Mostre o objeto antes e depois das alterações.
//
// Escreva sua solução abaixo:

const ingresso = {
    evento: "Show do I-dle",
    preco: 360,
    quantidade: 2
}
console.log(ingresso);

ingresso.preco = 340;
ingresso.quantidade = 3;

console.log(ingresso);