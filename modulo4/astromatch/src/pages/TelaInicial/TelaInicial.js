import React, { useEffect, useState } from "react"
import axios from 'axios'
import { ChakraProvider } from '@chakra-ui/react'
import { BASE_URL } from '../../constants/Urls'
import { Photo, Container, StyledButton } from "./StyledTela"
import { Button } from '@chakra-ui/react'

function TelaInicial(props) {
   
  const [profile, setProfile] = useState({})

  const renderizaTela = (event) => {
    setProfile(event.target.value)
  }
  
  const escolhaDoPerfil = () => {
    axios.get(`${BASE_URL}person`)
    .then((res) => {
        console.log('escolhaDoPerfil',res.data.profile)
        setProfile(res.data.profile)
    })
    .catch((err) => {
        alert('Algo deu errado!')
    })
  }

  useEffect(() => {
    escolhaDoPerfil();
      }, []);

    return(
      <Container>
        <ChakraProvider>
            <h1><strong>ASTROMATCH</strong></h1>
            <Photo>
               <img src={profile.photo}/>
            </Photo>
            <StyledButton>
               <Button onClick={() => escolhaDoPerfil()} onChange={renderizaTela} colorScheme='teal' size='lg'>dislike</Button>
               <Button onClick={() => escolhaDoPerfil()} onChange={renderizaTela} colorScheme='teal' size='lg'>like</Button>
            </StyledButton>
            
            
        </ChakraProvider>
          
      </Container>
    )
}

export default TelaInicial