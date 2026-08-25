// EXERCÍCIO 19 - ARRAY DE OBJETOS
// Crie um array com três objetos de jogos.
// Cada jogo deve possuir titulo, plataforma e classificacao.
// Percorra o array e mostre o título e a plataforma de cada jogo.
//
// Escreva sua solução abaixo:

const jogos = [
    {titulo: "Epic Minigames", plataforma: "Roblox", classificacao: "Livre"},
    {titulo: "Bedwars", plataforma: "Minecraft", classificacao: "Livre"},
    {titulo: "Parkour", plataforma:"Kogama", classificacao: "Livre"}
]

jogos.forEach((jogo) => {console.log(jogo.titulo, jogo.plataforma)});