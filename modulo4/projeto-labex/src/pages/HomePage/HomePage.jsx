import React from "react"
import { useNavigate } from "react-router-dom"
import { goToListTripsPage, goToLoginPage } from '../../routes/Coordinator'

// import { ChakraProvider } from '@chakra-ui/react'
// import { theme } from '../../theme'
// import { Button } from '@chakra-ui/react'

const HomePage = () => {

  const navigate = useNavigate()

    return (
      <div>
          <h1>Bem vindo ao Labex</h1>
          <button onClick={()=> goToListTripsPage(navigate)}>Ver Viagens</button>
          <button onClick={()=> goToLoginPage(navigate)}>Área Adm</button>
          
      </div>
    )
  }
  
  export default HomePage