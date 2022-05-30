function nomeENascimento(nome:string, data:string ):string {
    const dataComBarra = data.split("/",3)
    return `Olá me chamo ${nome}, nasci no dia ${dataComBarra[0]} do mês ${dataComBarra[1]} do ano de ${dataComBarra[2]} `
}
console.log(nomeENascimento("Alex","23/08/1985"))
