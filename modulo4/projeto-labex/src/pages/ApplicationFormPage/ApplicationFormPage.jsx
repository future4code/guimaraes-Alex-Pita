import React from "react"
import { useNavigate } from "react-router-dom"
import { goToBack } from "../../routes/Coordinator"

const ApplicationFormPage = () => {

  const navigate = useNavigate()

    return (
      <div>
            <h2>Inscreva-se para uma viagem</h2>
            <input placeholder="Escolha uma viagem"/>
            <input placeholder="Nome"/>
            <input placeholder="Idade"/>
            <input placeholder="Texto de Candidatura"/>
            <input placeholder="Profissão"/>
            <input placeholder="Escolha um País"/>
            <button onClick={()=> goToBack(navigate)}>Voltar</button>
            <button>Enviar</button>
      </div>
    )
  }
  
  export default ApplicationFormPage