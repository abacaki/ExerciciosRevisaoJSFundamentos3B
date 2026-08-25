// EXERCÍCIO 09 - FIND - ALUNO
// Crie um array de objetos com nome e matrícula de quatro alunos.
// Utilize find() para localizar o aluno com a matrícula 103.
// Mostre o aluno encontrado.
//
// Escreva sua solução abaixo:

const alunos = [
    {nome: "Anna", matricula:101},
    {nome: "Beatriz", matricula:102},
    {nome: "Camila", matricula:103},
    {nome: "Daniela", matricula:104},
]

const localizar = alunos.find((aluno) => aluno.matricula === 103);
console.log(localizar);
