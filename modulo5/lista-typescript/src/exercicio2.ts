const tipoVariavel = (data:any) => {
    const type = typeof data
    return (`${type}`)
}
console.log(tipoVariavel("Alex"));
