// EXERCÍCIO 20 - FILTRANDO OBJETOS
// Crie um array com cinco funcionários contendo nome e salario.
// Utilize filter() para selecionar funcionários com salário acima de R$ 3.000.
// Mostre o novo array.
//
// Escreva sua solução abaixo:

const funcionarios = [
    {nome: "Julia Mine", salario: 10000},
    {nome: "Cris Mine", salario: 2800},
    {nome: "Tex HS", salario: 7400},
    {nome: "Luna", salario: 2000},
    {nome: "Amora", salario: 1800},
]
console.log(funcionarios);

const salarioAcima = funcionarios.filter((funcionario) => funcionario.salario >= 3000);
console.log(salarioAcima);