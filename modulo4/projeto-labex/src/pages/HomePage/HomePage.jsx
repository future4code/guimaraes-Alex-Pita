import React from "react"
import { useNavigate } from "react-router-dom"
import { goToListTripsPage, goToLoginPage } from '../../routes/Coordinator'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme'
import { Button } from '@chakra-ui/react'


const HomePage = () => {

  const navigate = useNavigate()

    return (
      <ChakraProvider theme={theme}>
          <h1>Bem vindo ao Labex</h1>
          <Button colorScheme='blue' size='lg' onClick={()=> goToListTripsPage(navigate)}>Ver Viagens</Button>
          <Button colorScheme='blue' size='lg' onClick={()=> goToLoginPage(navigate)}>Área Adm</Button>
      </ChakraProvider>
    )
  }
  
  export default HomePage