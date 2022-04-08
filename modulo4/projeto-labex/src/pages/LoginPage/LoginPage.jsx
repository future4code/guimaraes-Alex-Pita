import React, { useState } from "react"
import axios from "axios"


const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
console.log('email: ', email)
console.log('senha: ', password)

const login = () => {
  console.log(email, password)

  const body = {
    email: email,
    password: password
  }

  axios
    .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-bitencourt-guimaraes/login', body)
    .then(res => { 
      console.log('Deu certo:', res.data.token)
      localStorage.setItem('token', res.data.token)
    })
    .catch(err => console.log('Deu ruim', err.response))
}


    return (
      <div>
            <h2>LoginPage</h2>
            <input placeholder="E-mail" value={email} onChange={handleEmail}/>
            <input placeholder="Senha" value={password} onChange={handlePassword} type={'password'}/>
            <button onClick={login}> Entrar! </button>
      </div>
    )
  }
  
export default LoginPage