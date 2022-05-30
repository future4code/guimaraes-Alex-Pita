import { EnumType } from "typescript";

enum GENERO {
	ACAO="ação",
	AVENTURA="aventura",
	COMEDIA="comédia",
	FANTASIA="fantasia",
	TERROR="terror"
}

type filme = {
    nome:string,
    anoLancamento: number,
    genero: EnumType,
    pontuacao?:number
}

const filme1 = {
    nome: "Morbius",
    anoLancamento: 2022,
    genero: GENERO.ACAO,
    pontuacao:10
}

console.log(filme1)
