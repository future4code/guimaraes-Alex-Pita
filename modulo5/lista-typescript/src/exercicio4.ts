enum setores {
    MARKETING="Marketing",
    VENDAS="Vendas",
    FINANCEIRO="Financeiro"
}

type ArrayInfomacaoFuncionarios = {
	nome: string,
	salário: number,
	setor:string,
	presencial: boolean
}

let array: ArrayInfomacaoFuncionarios[]   = [
	{ nome: "Marcos", salário: 2500, setor: setores.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: setores.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: setores.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: setores.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: setores.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: setores.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: setores.MARKETING, presencial: true }
]

let filtraMarketingEPresencial = array.filter((item) => {
    return item.setor === setores.MARKETING && item.presencial === true
})

console.log(filtraMarketingEPresencial)