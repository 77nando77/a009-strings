//Crie a const para a frase aqui
const gatoSair = "\"BOAS VINDAS, mas não deixe o gato sair\""
let frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: ${gatoSair} `
console.log(frase)

frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: ${gatoSair.toUpperCase()} `
let cor = frase.replace("verde", "rosa").replace("azul", "laranja")
let verde = cor.includes("verde")
let laranja = cor.includes("laranja")

console.log(cor)
console.log(verde)
console.log(laranja)
