//1 Matheus Nachtergaele , Virginia Cavendish, canal: "Globo" horario: "14h"
//2.A idade: 3 nome: "Juca" raca: "SRD"
//2.A idade: 3 nome: "Juba" raca: "SRD"
//2.A idade: 3 nome: "Jubo" raca: "SRD"
//2.B copia tudo do abjeto especificado e da continuidade.
//3.A false e undefined
//3.B Dentro do objeto pessoa retornou False por está especificado e undefined por não ter nada especificado.

//  const pessoa1 = {
//      nome: "Thayane", 
//      apelidos: ["Thayaninha", "Thay", "Thata"]
//   }
//   console.log(`Eu sou ${pessoa1.nome}, mas pode me chamar de: ${pessoa1.apelidos [0]}, ${pessoa1.apelidos [1]} ou ${pessoa1.apelidos [2]}`);
//   const imprimaConsole = () => {

//   const pessoa2 = {
//  ...pessoa1,
//   novoApelido: ["Gatinha", "Manhosa", "gaiata"]
// }
//      const frase = `Eu sou ${pessoa1.nome}, mas pode me chamar de: ${pessoa2.novoApelido [0]}, ${pessoa2.novoApelido [1]} ou ${pessoa2.novoApelido [2]}`

//     return frase
// }
// console.log(imprimaConsole());

// const homem = {
// nome: "Alex",
// idade: 37,
// profissao: "fiscal",

// }

// const mulher = {
//     nome: "Thayane",
//     idade: 30,
//     profissao: "Advogada",
//  }
   
//  const imprimaConsole = (dados) =>{

// const array = [dados.nome, dados.nome.length, dados.idade, dados.profissao, dados.profissao.length]

// return array

// }
// console.log(imprimaConsole(homem));

let compras = []

const jambo = {
    nome: "jambo",
    temDisponivel: true
}
const atemoia = {
    nome: "atemoia",
    temDisponivel: true
}
const jamelao = {
    nome: "jamelao",
    temDisponivel: true
}

const sacola = (fruta) =>{
compras.push(fruta)
return compras

}

console.log("Compras", sacola(jambo));
console.log("Compras", sacola(atemoia));
console.log("Compras", sacola(jamelao));
