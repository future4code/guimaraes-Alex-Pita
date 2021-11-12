// const resultado1 = 3 + 4
// const resultado2 = (3 * 5) / 2
// const resultado3 = (5 - 4) * -1
// const resultado4 = 234 % 5

/* console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4) */

/* const a = 10
const b = 25
const verificacao1 = a === b
console.log(verificacao1)

const verificacao2 = a !== b
console.log(verificacao2)

const verificacao3 = a > b
console.log(verificacao3) */

/* const a = true
const b = false
const c = true

console.log(a && b)
console.log(b && c)
console.log(a && c)
console.log(a && b && c) */

// const a = true
// const b = false
// const c = false

// console.log(a || b)
// console.log(b || c)
// console.log(a || c)

// 1. a. false
// b. false
// c. true
// d. boolean
// 2 está como string, a soma nao sera efetuada
// 3 add number antes do prompt, assim o mesmo vai retonar como número
// 2.C retorna sempre zero
// 2.D retona sempre um

// let primeiroNumero = Number( prompt("Digite um numero!"))
// let segundoNumero = Number( prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// let idade = Number( prompt("Sua idade."))
// let idadeAmigo = Number( prompt("Idade do melhor amigo."))
// console.log("Sua idade é maior do que a do seu amigo?", idade > idadeAmigo)

// const subtracao = idade - idadeAmigo

// console.log(subtracao)
 

// let numero = Number( prompt("Insira um número"))
// let divisao1 = 2

// const restodaDivisao1 = numero % divisao1

// console.log(restodaDivisao1)

// let idade = Number( prompt("Qual sua idade?"))

// console.log(idade,"anos")

// let idadeMeses = 12
// let idadeDias = 360
// let idadeHoras = 8640

// console.log(idade * idadeMeses, "meses")

// console.log(idade * idadeDias, "dias")

// console.log(idade * idadeHoras, "horas")

let numeroUm = Number( prompt("Qual o seu primeiro Número?"))
let numeroDois = Number( prompt("Qual o segundo?"))
let numeroTres = numeroUm % numeroDois
let numeroQuatro = numeroDois % numeroUm

console.log("O primeiro numero é maior que segundo?", numeroUm > numeroDois)

console.log("O primeiro numero é igual ao segundo?", numeroUm === numeroDois)

console.log("O primeiro numero é divisível pelo segundo?", numeroTres === 0 )

console.log("O segundo numero é divisível pelo primeiro?", numeroQuatro === 0 )