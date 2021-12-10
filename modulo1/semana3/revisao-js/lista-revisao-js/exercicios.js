// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function (a, b){
      return a - b
  })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

  array = array.filter(function(i){

      if(i % 2 === 0){
        return true
      }

 })
  return array
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novaArray = []
    for(let num of array) {
      if(num % 2 === 0) {
        novaArray.push(Math.pow(num , 2))
      }
      }
      return novaArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return  Math . max ( ... array )
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let  objeto  =  {
    maiorNumero : '' ,
    maiorDivisivelPorMenor : '' ,
    diferenca : '' ,
}

if  ( num1  >  num2 )
{
    objeto . maiorNumero  =  num1 ;
    if  ( num1  %  num2  ===  0 )
    {
        objeto . maiorDivisivelPorMenor  =  true ;
    }
    else
    {
        objeto . maiorDivisivelPorMenor  =  false ;
    }
    objeto . diferenca  =  num1  -  num2 ;
}
else
{
    objeto . maiorNumero  =  num2 ;
    if  ( num2  %  num1  ===  0 )
    {
        objeto . maiorDivisivelPorMenor  =  true ;
    }
    else
    {
        objeto . maiorDivisivelPorMenor  =  false ;
    }
    objeto . diferenca  =  num2  -  num1 ;
}

return  objeto ;

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

  let arrayPares = [];

    for( i  =  0 ;  arrayPares . length  <  n ;  i ++ )
    {
        if( i  %  2  ===  0 )
        {
            arrayPares.push(i);
        }
    }

    return arrayPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if  ( ladoA  !==  ladoB  &&  ladoB  !==  ladoC  &&  ladoA  !==  ladoC )
  {
      console . log ( 'Este triângulo é ESCALENO' )
      return  "Escaleno" ;
  }
  else  if  ( ladoA  ===  ladoB  &&  ladoA  !==  ladoC  &&  ladoB  !==  ladoC  ||
           ladoA  ===  ladoC  &&  ladoA  !==  ladoB  &&  ladoB  !==  ladoC  ||
           ladoB  ===  ladoC  &&  ladoA  !==  ladoC  &&  ladoA  !==  ladoB
          )
  {
      console . log ( 'Este triângulo é ISÓSCELES' )
      return  "Isósceles" ;
  }
  else
  {
      console . log ( 'Este triângulo é EQUILÁTERO' )
      return  "Equilátero" ;
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  array . sort ( function  ( a ,  b )  {
    return  a  -  b
} )

let  menor  =  array [ 1 ] ;
let  maior  =  array [ array . length  -  2 ] ;
array  =  [ maior ,  menor ]

 return array
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return  `Venha assistir ao filme ${filme.nome}, de ${ filme . ano }, dirigido por ${ filme . diretor } e estrelado por ${ filme . atores . join ( ', ' ) }.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let  objeto  =  {
    ... pessoa
}

return  {
    'nome' : "ANÔNIMO" ,
    'idade' : objeto . idade ,
    'email' : objeto . email ,
    'endereco' : objeto . endereco
}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let  permissao  =  pessoas . filter ( ( pessoa )  =>  {
    return  ( pessoa . idade  >  14  &&  pessoa . idade  <  60  &&  pessoa . altura  >  1.5 )
} )

return  permissao

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let  naoPermitida  =  pessoas . filter ( ( pessoa )  =>  {
    return  ! ( pessoa . idade  >  14  &&  pessoa . idade  <  60  &&  pessoa . altura  >  1.5 )
} )

return  naoPermitida
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}