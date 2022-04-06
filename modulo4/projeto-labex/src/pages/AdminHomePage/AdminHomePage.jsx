import React from "react"
import { useNavigate } from "react-router-dom"
import { goToBack } from "../../routes/Coordinator"

const AdminHomePage = () => {

  const navigate = useNavigate()

    return (
      <div>
          <h2>Login</h2>
          <input placeholder="E-mail"/>
          <input placeholder="Senha"/>
          <button onClick={()=>goToBack(navigate)}>Voltar</button>
          <button>Entrar</button>
      </div>
    )
  }
  
  export default AdminHomePage