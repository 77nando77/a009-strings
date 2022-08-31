const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(`Quantidade de letras antes: ${minhaString.length}`)
const espaco = minhaString.trim()
console.log(`Quantidade de letras depois: ${espaco.length}`)
let trocado = espaco.replace("________" , "sticioso")
console.log(trocado)