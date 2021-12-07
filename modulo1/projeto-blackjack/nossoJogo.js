/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// ====== BlackJack ======

    console.log("Boas vindas ao jogo de Blackjack!");

    if (confirm ("Quer iniciar uma nova rodada?")){
   
      let pcPrimeiraCarta = comprarCarta()
      let pcSegundaCarta = comprarCarta()

      let userPrimeiraCarta = comprarCarta()
      let userSegundaCarta = comprarCarta()

      let pontosPc = pcPrimeiraCarta.valor + pcSegundaCarta.valor
      let pontosUser = userPrimeiraCarta.valor + userSegundaCarta.valor

      console.log(`Computador - cartas: ${pcPrimeiraCarta.texto} ${pcSegundaCarta.texto} - pontuação ${pontosPc}`);
      console.log(`Usuário - cartas: ${userPrimeiraCarta.texto} ${userSegundaCarta.texto} - pontuação ${pontosUser}`);

      if(pontosPc > pontosUser){
         console.log("O computador ganhou!");
      } else if (pontosPc < pontosUser){
         console.log("O usuário ganhou!");
      } else if (pontosPc === pontosUser){
         console.log("Empate!");
      }
    } else{
       console.log("O jogo acabou");
    }