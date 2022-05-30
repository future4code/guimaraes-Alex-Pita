type ArrayUsuarios = {
    name: string,
    email: string,
    role: string
}

const users:ArrayUsuarios[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const buscaAdmin = (user: ArrayUsuarios[]) => {
    let listEmails = user.filter(
        (user) => {return user.role === "admin"}
    ).map(
        (user) => {return user.email}
    )
    return listEmails
}
console.log(buscaAdmin(users))