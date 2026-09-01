// EXERCÍCIO 33 - GETTERS E SETTERS
// Crie uma classe Aluno com o campo privado #nota.
// Crie get nota e set nota. O setter deve aceitar somente valores entre 0 e 10.
// Crie um aluno, altere sua nota e mostre o resultado.
//
// Escreva sua solução abaixo:

class Aluno {
    #nota;

    constructor(nota){
        this.#nota = nota;
    }

    get(){
        return this.#nota;
    }

    set (valor){
        if(valor >= 0 && valor <= 10) {
            this.#nota = valor;
        }
    }
}

const aluno = new Aluno();
aluno.nota = 8.5;
console.log(aluno.nota);