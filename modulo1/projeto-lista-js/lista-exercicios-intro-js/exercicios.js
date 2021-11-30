// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
altura = Number( prompt("Qual sua altura?"))
largura = Number( prompt("Qual sua largura?"))
 resultado = (altura * largura)

console.log(resultado);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  anoAtual = Number( prompt("Qual sua idade?"))
  anoNascimento = Number( prompt("qual ano nasceu?"))
  idade = anoAtual - anoNascimento

    console.log(idade);
  
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
imc = peso / (altura * altura)
return (imc)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  nome = prompt("Qual seu nome?")
  idade = Number( prompt("Qual sua idade?"))
  email = prompt("Qual seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);

  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
cor1 = prompt("Digite sua primeira cor favorita.")
cor2 = prompt("Digite a segunda cor.")
cor3 = prompt("Digite a terceira cor.")
cores = [cor1, cor2, cor3]

console.log(cores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  maiuscula = string.toUpperCase()
  return maiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
VendasNecessaria = custo / valorIngresso
return VendasNecessaria
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let primeira = string1.length
let segunda = string2.length
return primeira == segunda
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  ultimoElemento = array[array.length -1]
return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
primeiroElemento = array[0]
array[0] = array[array.length -1]
array[array.length -1] = primeiroElemento
return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 let comparacao = string1.toUpperCase() === string2.toUpperCase()
 return comparacao
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}