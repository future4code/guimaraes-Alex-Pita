import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { theme } from '../Thema'

function HomePage() {

    return (
      <ChakraProvider theme={theme}>
            <h2>Labex</h2>
            <Button colorScheme='teal' size='md'> Ver Viagens </Button>
            <Button bg="brand.900"> Área de Admin </Button>
      </ChakraProvider>
    )
  }
  
  export default HomePage