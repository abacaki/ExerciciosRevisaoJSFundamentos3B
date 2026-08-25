// EXERCÍCIO 29 - ARRAY EM JSON
// Crie um array com três objetos de tarefas contendo id, descricao e concluida.
// Converta o array para JSON e mostre o resultado.
//
// Escreva sua solução abaixo:

const tarefas = [
    {id: 101, descricao: "Lavar louça", concluida: true}, 
    {id: 102, descricao: "Varrer o chão", concluida: true},
    {id: 103, descricao: "Passar pano", concluida: false}
]

const json = JSON.stringify(tarefas);
console.log(json);

