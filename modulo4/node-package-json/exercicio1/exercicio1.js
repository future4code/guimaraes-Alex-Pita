//1 A process.argv[2] E node ./index.js
//1 B
// const name = process.argv[2]
// const idade = Number(process.argv[3]) 
// console.log(`Olá, ${name}! Você tem ${idade} anos.`)

//1 C
const nome = process.argv[2]
const idade = Number(process.argv[3])
const novaIdade = Number(idade + 7)
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)