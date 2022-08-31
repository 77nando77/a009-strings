//Crie a const para a frase aqui
const gatoSair = "\"BOAS VINDAS, mas não deixe o gato sair\""
let frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: ${gatoSair} `
console.log(frase)
frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: ${gatoSair.toUpperCase()} `
const cor = frase.replace("verde", "rosa").replace("azul", "laranja")
console.log(cor)