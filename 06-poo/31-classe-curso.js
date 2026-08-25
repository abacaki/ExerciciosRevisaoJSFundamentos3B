// EXERCÍCIO 31 - CLASSE E INSTÂNCIAS
// Crie uma classe Curso com constructor para nome, duracao e modalidade.
// Crie um método exibirInformacoes() e duas instâncias da classe.
// Mostre os dados dos dois cursos.
//
// Escreva sua solução abaixo:

class Curso {
    constructor(nome, duracao, modalidade) {
        this.nome = nome;
        this.duracao = duracao;
        this.modalidade = modalidade
    }
    exibirInformacoes(){
      console.log(`Curso: ${this.modalidade}; Duração: ${this.duracao}`);
    }
}


const cursos = new Curso("DS", "2 anos", "Back-End");
cursos.exibirInformacoes();
const cursos1 = new Curso("ADM", "2 anos", "PPP");
cursos1.exibirInformacoes();
