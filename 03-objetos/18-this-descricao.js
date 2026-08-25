// EXERCÍCIO 18 - UTILIZANDO THIS
// Crie um objeto curso com nome, modalidade e um método descrever().
// O método deve utilizar this e retornar uma frase com os dados do curso.
//
// Escreva sua solução abaixo:

const curso = {
    nome: "Desenvolvimento de Sistemas",
    modalidade: "Back-End",
    descrever(){
        console.log(`O curso ${this.nome} tem a modalidade ${this.modalidade}`);
    }
}

console.log(curso.descrever());