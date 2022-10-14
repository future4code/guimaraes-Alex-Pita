importação com  estilo  de  "componentes com estilo" ;

export  const  CardContainer  =  styled . div `
exibição: flexível;
direção flexível: coluna;
borda: 2px sólido #CF0808;
raio da borda: 8px;
altura: 80vw;
altura máxima: 266px;
largura: 48%;
margem inferior: 8%;
justificar-conteúdo: espaço-entre;
preenchimento: 0;
img {
    largura: 92%;
    alinhar-se: centro;
    margem inferior: 0;
}
p:primeiro do tipo {
    margem superior: 0;
    alinhamento de texto: centro;
    cor: #CF0808;
    tamanho da fonte: 1.3rem;
    peso da fonte: 600;
    margem inferior: 0;
}
p:n-ésimo-do-tipo(2) {
    margem superior: 0;
    alinhamento de texto: centro;
    cor preta;
    tamanho da fonte: 1.0rem;
    margem inferior: 0;
    padding-left: 3px;
    padding-right: 3px;
}
`

export  const  AddButtonAndPrice  =  styled . div `
exibição: flexível;
direção flexível: linha;
justificar-conteúdo: espaço-entre;
raio da borda: 8px;
preenchimento: 0;
altura: 29px;
p{
    margem superior: 0;
    alinhamento de texto: centro;
    cor preta;
    tamanho da fonte: 1.5rem;
    margem inferior: 0;
    alinhar-se: centro;
    margem esquerda: 8px;
}
botão {
    borda: nenhuma;
    cor de fundo: #CF0808;
    cor: #ffffff;
    tamanho da fonte: 25px;
    raio da borda: 10px 0px 5px 0px;
    margem: 0;
    preenchimento: 0;
    largura: 25%;
    altura: 100%;
}`