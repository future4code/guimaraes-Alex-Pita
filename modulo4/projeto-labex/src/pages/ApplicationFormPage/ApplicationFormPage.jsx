import React from "react"
import { useNavigate } from "react-router-dom"
import { goToBack } from "../../routes/Coordinator"

const ApplicationFormPage = () => {

  const navigate = useNavigate()

    return (
      <div>
            <h2>Inscreva-se para uma viagem</h2>
            <button onClick={()=> goToBack(navigate)}>Voltar</button>
            <button>Enviar</button>
      </div>
    )
  }
  
  export default ApplicationFormPage