console.log('Boa noite Guimarães')

// ----------------- EXEMPLO  EXPLICAÇÃO DE COMPARADORES ------------------------
//const num1 = 6
//const num2 = '6'



//console.log('Comparação entre os números é: ', num1 === num2 )

// ----------------- EXEMPLO  EXPLICAÇÃO IF -------------------------
//const condicao = false

//if (condicao){
//    console.log('condicao verdadeira entrei no if')
//}

// ----------------- EXEMPLO EXERCÍCIO 1 -------------------------
//Crie uma função que:


//Recebe 2 números (chamaremos de num1 e num2)
//Compara esses números entre si:


//Se os números forem iguais, retorna uma mensagem de sucesso

//Depois, chame a função com números que foram inseridos pelo usuário através do prompt

//function compararNumeros (num1, num2){
    //console.log ('função compara numeros foi chamada' )
    //if(num1 === num2){
      //  console.log ('Top os números são iguais')
    //}
//}
//usuarioNumero1 = Number(prompt('Digite o primeiro numero'))
//usuarioNumero2 = Number(prompt('Digite o segundo numero'))

//compararNumeros (usuarioNumero1, usuarioNumero2)

// ----------------- EXEMPLO  EXPLICAÇÃO IF  ELSE  -------------------------


/* function verAniversario (){
    if(aniversario === 'janeiro'){
        console.log( 'Mês da Fay dê presente')
    }else{
        console.log( 'guardar dinheiro')
    }
}

let aniversario = prompt ('Digite o mes de aniversario')

verAniversario(aniversario)
*/


// ----------------- EXEMPLO EXERCÍCIO 2  -------------------------
/*function compararNumeros (num1, num2){
    console.log ('função compara numeros foi chamada' )
    if(num1 === num2){
        console.log ('Top os números são iguais')
    }else{
        console.log('Bad triste número diferentes')
    }
}

usuarioNumero1 = Number(prompt('Digite o primeiro numero'))
usuarioNumero2 = Number(prompt('Digite o segundo numero'))

compararNumeros (usuarioNumero1, usuarioNumero2)
*/
// ----------------- EXEMPLO ELSE IF  -------------------------

/* function verAniversario (){
    if(aniversario === 'janeiro'){
        console.log( 'Mês da Fay dê presente')
    }else if (aniversario === "fevereiro"){
        console.log( 'Mês da Maju dê presente')
    }
    else{
        console.log( 'guardar dinheiro')
    }
}

let aniversario = prompt ('Digite o mes de aniversario')

verAniversario(aniversario)*/

// ----------------- EXEMPLO EXERCÍCIO 3  -------------------------
/*function compararNumeros (num1, num2){
    console.log ('função compara numeros foi chamada' )
    if(num1 > num2){
        console.log ('Número 1 é maior que número 2')
    }else if (num1 < num2){
        console.log ('Nuúmero 1 é menor que número 2')
    }
    else{
        console.log('Os números são iguais')
    }
}

usuarioNumero1 = Number(prompt('Digite o primeiro numero'))
usuarioNumero2 = Number(prompt('Digite o segundo numero'))

compararNumeros (usuarioNumero1, usuarioNumero2) */


 // ----------------- EXEMPLO SWITCH CASE EX. CLIMA SLID 41 ------------------------
 /*const clima = prompt('Qual é o clima atual?')

 switch(clima){
     case 'calor':
         console.log('Vamos pra praia')
         break
    case 'frio':
        console.log('Vamos pra serra')
        break
    case 'nevando':
        console.log('Vamos pra esquiar')
        break
    default:
        console.log('clima inválido')
 }
*/


// ----------------- EXEMPLO EXERCÍCIO 4  -------------------------

/*const verificarTipoPokemon = (pokemonEscolhido) =>{
    switch(pokemonEscolhido){
        case 'Bulbasauro':
            console.log('planta e veneno')
            break
        case 'Charmander':
            console.log('fogo')
            break
        case 'Squirtle':
            console.log('água')
            break
        default :
            console.log('tipo de pokemon válido')
    }
}

const pokemonUsuario = prompt('Escolha um pokemon para saber o tipo')
verificarTipoPokemon(pokemonUsuario) */


// ----------------- Exemplo Harry Potter  -----------------------

/* const escolherCasa = (casaEscolhida)=>{
    switch(casaEscolhida){
        case 'Hermione' :
            console.log('É melhor que seja ... Grifinória!')
        break
        case 'Harry Potter':
            console.log('É melhor que seja ... Grifinória!')
        break
        case 'Ana':
            console.log('É melhor que seja ... Lufa-lufa!')
        break
        case 'Luna':
            console.log('É melhor que seja ... Corvinal!')
        break
        case 'Narcisa':
            console.log('É melhor que seja ... Sonserina!')
        break
        default:
            console.log('By bye Hogwarst, você não foi alocada!')
    }

}

const escolhaDePersonagemUsuario = prompt('Escolha uma personagem para o chapéu seletor verificar a casa')

escolherCasa(escolhaDePersonagemUsuario) */ 


// ----------------- EXEMPLO CONDICIONAIS E OPERADORES ---------------

/*const condicao1 = true
const condicao2 = false

// ! => Operador de negação transforma no oposto 

if(condicao1 && !condicao2){
    console.log('Entrei no if!')
}else{
    console.log('Entrei no else')
} */

// ----------------- EXEMPLO EXERCÍCIO 5  -------------------------

/*const dizerSePodeEstudar = (terminouEnsinoMedio, maiorDeIdade, cursandoOutraFaculdade) =>{
    if(terminouEnsinoMedio && maiorDeIdade &&  !cursandoOutraFaculdade){
        console.log('A pessoa estudante, pode cursar nossa faculdade')

    }else{
        console.log('Não pode estudar na nossa faculdade')
    }
}

let terminouEnsinoMedioUsuario = prompt( 'Você terminou o ensino médio? Sim ou não').toLowerCase() === 'sim'
let maiorDeIdadeEnsinoMedioUsuario = prompt( 'Você é maior de idade? Sim ou não').toLowerCase() === 'sim'
let cursandoOutraFaculdadeUsuario = prompt( 'Você está cursando outra faculdade? Sim ou não').toLowerCase() === 'sim'

dizerSePodeEstudar(terminouEnsinoMedioUsuario,maiorDeIdadeEnsinoMedioUsuario,cursandoOutraFaculdadeUsuario)*/

// ----------------- EXEMPLO EXERCÍCIO 5B -------------------------
// Vai dar certo por que você não passou o parâmetro e chamou a função sem passar o parêmetro também. Não daria certo você chamar a função com paramêtro, se você declarou ela sem. 


// const dizerSePodeEstudar = () =>{

//     let terminouEnsinoMedio1 = prompt( 'Você terminou o ensino médio? Sim ou não').toLowerCase() === 'sim'

//     let maiorDeIdade1= prompt( 'Você é maior de idade? Sim ou não').toLowerCase() === 'sim'

//     let cursandoOutraFaculdade1= prompt( 'Você está cursando outra faculdade? Sim ou não').toLowerCase() === 'sim'

//     if(terminouEnsinoMedio1 && maiorDeIdade1 &&  !cursandoOutraFaculdade1){
//         console.log('A pessoa estudante, pode cursar nossa faculdade')

//     }else{
//         console.log('Não pode estudar na nossa faculdade')
//     }
// }
// dizerSePodeEstudar()
// 1.A Dividi o número digitado no prompt por 2 para saber se o resto é positivo ou negativo.A
// 1.B números positivos
// 1.C némeros negativos
// 2.A para dizer o valor das frutas
// 2.B maça
// 2.C O preço da fruta  Pêra vai assumir o valor do ultimo break
// 3.A pedindo para o usuário digitar um número
// 3.B se for 10 Esse número passou no teste, msg não definida

//  const idadedoUsuario = Number( prompt('Qual é a sua idade?'))

//  if(idadedoUsuario >= 18){
// console.log("Você pode dirigir");
//   } else {
//     console.log("Você não pode dirigir.");
//   }

// function saudacao (){
//     if(turnoDoDia == 'M'){
//         console.log('Bom Dia!')
//     }else if (turnoDoDia === "V"){
//         console.log('Boa Tarde!')
//     }else {
//         console.log('Boa Noite!')
//     }  
// }

// turnoDoDia = prompt("Qual turno você estudo? digitar M (matutino) ou V (Vespertino) ou N (Noturno). ")

// saudacao(turnoDoDia)

// const saudacao = (horasDodia)=>{
//     switch(horasDodia){
//         case 'M' :
//             console.log('Bom Dia!')
//         break
//             case 'V' :
//                 console.log('Bom Tarde!!')
//             break
//                 case 'N' :
//                     console.log('Boa Noite!')
//                 break
//         }
//     }
//  turnoDoDia = prompt("Qual turno você estudo? digitar M (matutino) ou V (Vespertino) ou N (Noturno).")

//  saudacao(turnoDoDia)
let filme = prompt("Qual gênero vai ser assistido?")
let valorIngresso = Number(prompt("Qual o valor do ingresso?"))

function generoEscolhido(filme){

if(filme === "fantasia" && valorIngresso < 15){
        console.log("Bom filme!");
}
else{
    console.log("Escolha outro filme :(");
}
}
generoEscolhido(filme)