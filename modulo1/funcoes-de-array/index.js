//Exercícios de interpretação de código

// 1 Cria um array para cada linha com os objetos solicitados.
// 2 Cria um array com os nomes.
// 3 Vai criar um array para cada linha com os objetos solicitado, deixando de fora a linha do array com a palavra Chijo

//Exercícios de escrita de código

//1
// const pets = [
//    { nome: "Lupin", raca: "Salsicha"},
//    { nome: "Polly", raca: "Lhasa Apso"},
//    { nome: "Madame", raca: "Poodle"},
//    { nome: "Quentinho", raca: "Salsicha"},
//    { nome: "Fluffy", raca: "Poodle"},
//    { nome: "Caramelo", raca: "Vira-lata"},
// ]

// ===== Resposta letra A =====

// const nomeDosPets = pets.map((item, index, array) => {
//    return item.nome
// })

// console.log(nomeDosPets)

// ===== Resposta letra B =====

// const nomeDosPets = pets.filter((item, index, array) => {
//       return item.raca === "Salsicha"
//    })
   
//    console.log(nomeDosPets)

// ===== Resposta letra C =====

// const promoPoodles = pets.filter((item, index, array) => {
//    if(item.raca === "Poodle")
//    return item.nome
// })
// const msgPoodles = promoPoodles.map((item, index, array) => {
//       return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
// })

// console.log(msgPoodles);

2
const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// ===== Resposta letra A =====

// const nomeCompras = produtos.map((item, index, array) => {
//       return item.nome
//    })
   
//    console.log(nomeCompras)

// ===== Resposta letra B =====

// const nomeCompras = produtos.map((item, index, array) => {
//          return `${item.nome} ${item.preco * .95}`
// })

// console.log(nomeCompras);

// ===== Resposta letra C =====

// const catBebidas = produtos.filter((item, index, array) => {
//          return item.categoria === "Bebidas"
//       })
      
//       console.log(catBebidas)

// ===== Resposta letra D =====

const catBebidas = produtos.filter((item, index, array) => {
         return item.nome.includes("Ypê")
      })
      
      console.log(catBebidas)