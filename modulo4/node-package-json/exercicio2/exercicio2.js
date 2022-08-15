//2
const operador = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

if(operador === 'add'){
  console.log(`Resposta: ${num1 + num2}`)
}
if(operador === 'sub'){
  console.log(`Resposta: ${num1 - num2}`)
}
if(operador === 'mult'){
  console.log(`Resposta: ${num1 * num2}`)
}
if(operador === 'div'){
  console.log(`Resposta: ${num1 / num2}`)
}