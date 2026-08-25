// EXERCÍCIO 13 - REDUCE - HORAS TRABALHADAS
// Considere as horas trabalhadas: [8, 7, 8, 6, 8].
// Utilize reduce() para calcular o total de horas trabalhadas na semana.
// Mostre o resultado.
//
// Escreva sua solução abaixo:

const horas = [8, 7, 8, 6, 8];

const horasTrabalhadas = horas.reduce((acumulador, horas) => acumulador + horas);
console.log(horasTrabalhadas);