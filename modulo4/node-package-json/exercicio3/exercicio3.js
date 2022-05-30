//3
const listaTarefa = [{id: 1, description: 'Comprar Leite'}]
console.table(listaTarefa)
const tarefa = process.argv[2]
listaTarefa.push({ id: 2, description: tarefa})
const tarefa2 = process.argv[3]
listaTarefa.push({ id: 3, description: tarefa2})
console.table(listaTarefa)