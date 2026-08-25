// EXERCÍCIO 21 - DESESTRUTURAÇÃO DE OBJETO
// Crie um objeto viagem com destino, dias e valor.
// Utilize desestruturação para criar variáveis com essas propriedades.
// Mostre as variáveis no console.
//
// Escreva sua solução abaixo:

const viagem = {destino: "Havaí", dias: 10, valor: 18000};

const {destino, dias, valor} = viagem;

console.log(`O destino é ${destino} por ${dias} dias com o valor de ${valor}`);