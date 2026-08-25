// EXERCÍCIO 04 - CONVERTER MINUTOS
// Crie uma Function Expression que receba uma quantidade de minutos
// e retorne o valor convertido em segundos.
// Lembrete: um minuto possui 60 segundos.
//
// Escreva sua solução abaixo:

const conversao = function(minutos){
    return minutos * 60;
}

console.log(`${conversao(7)} segundos`);