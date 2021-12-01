//EXERCICIO 01

/*let input
let soma = 0
while (input !== 0) {
    input = Number(prompt("insira um número"))
    soma += input
}
console.log(soma)



// EXERCICIO 02

const array = [11, 15, 18, 14, 12, 13]
let maior = 0

function maiorNumero(array) {
   for (let i = 0; i < array.length; i++) {
      if (maior < array[i]) maior = array[i] 
      
   }
   return maior
}

const resultado = maiorNumero(array)

console.log(`O Maior número é: ${resultado}`)


// EXERCICIO 03

const arrayPalavras = ["Hi", "I", "Am", "Groot"]

function concatenarPalavras(array) {
   let frase = ""
   for(let palavra of array) {
      frase += palavra + " "
   }
   return frase
}

const string = concatenarPalavras(arrayPalavras)
console.log(string)


 // REFORÇO FUNÇÃO

let nome = "Tayanne"
let profissao = "backender"
let idade = 26

function soma(nome, profissao, idade) {
  console.log(`${nome}, ${profissao}, ${idade}`)
}

soma(nome, profissao, idade)
soma(idade, nome, profissao)*/
//1. vai rodar o bloco de codigo até chegar na vareavel solicitada e vai soma os numeros que foi passado.  10 
//2.A 19, 21, 23, 25, 27, 30
//2.B sim, const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30] {
//    console.log(numero);
//}
//3.vai aparecer em linha os asteriscos comecando com 1, na quarta linha 4 asteriscos.

// let bichoEstimacao = Number( prompt("Quantos bichos de estimação você tem?"))
// let arrayPet = []

// if (bichoEstimacao === 0) {
//     console.log("Que pena! Você pode adotar um pet");
// } else if (bichoEstimacao > 0) {
//    for (let i = 0; i < bichoEstimacao; i++) {
        
//         let nomePets = prompt("Digite o nome dos seus pets");

//         arrayPet.push(nomePets)

//     }
//     console.log(arrayPet);
// }

let arrayOriginal = [80, 30, 130, 40, 60, 21,70,120,90,103,110,55]



// const valorArray = (arrayOrinal) => {

//   for(let i in arrayOriginal){
//     console.log(arrayOriginal[i])
//   }

// }

// valorArray(arrayOriginal)




// const dividirArray = (arrayOrinal) => {

//   for(let i in arrayOriginal){
//     console.log(arrayOriginal[i] / 10)
//   }

// }
// dividirArray(arrayOriginal)




// let arrayPar = [] 

// const paresArray = (arrayOriginal) => {

//   for (let i in arrayOriginal ){

//     if(arrayOriginal[i] % 2 === 0){
//       let pares = arrayOriginal[i]
//       arrayPar.push(pares)
//     }
//   }
// }

// paresArray(arrayOriginal)
// console.log(arrayPar)





// let StringArray = []

// const valorArray = (arrayOrinal) => {

//   for(let i in arrayOriginal){
//     let string = 'O elemento do Índex ' + i + ' é ' + arrayOriginal[i]
//     StringArray.push(string)
//   }

// }

// valorArray(arrayOriginal)
// console.log(StringArray)




// let valorMaximo = Math.max(...arrayOriginal)
// let valorMinimo = Math.min(...arrayOriginal)
// console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`);