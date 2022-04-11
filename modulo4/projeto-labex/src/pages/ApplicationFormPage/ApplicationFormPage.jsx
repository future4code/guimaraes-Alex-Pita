import React from "react"
import { useNavigate } from "react-router-dom"
import { goToBack } from "../../routes/Coordinator"
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme'
import { Button } from '@chakra-ui/react'

const ApplicationFormPage = () => {

  const navigate = useNavigate()

    return (
      <ChakraProvider theme={theme}>
            <h2>Inscreva-se para uma viagem</h2>
            <input placeholder="Escolha uma viagem"/>
            <input placeholder="Nome"/>
            <input placeholder="Idade"/>
            <input placeholder="Texto de Candidatura"/>
            <input placeholder="Profissão"/>
            <input placeholder="Escolha um País"/>
            <Button colorScheme='blue' size='lg' onClick={()=> goToBack(navigate)}>Voltar</Button>
            <Button colorScheme='blue' size='lg'>Enviar</Button>
      </ChakraProvider>
    )
  }
  
  export default ApplicationFormPage