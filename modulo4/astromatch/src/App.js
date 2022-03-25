import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TelaInicial from './pages/TelaInicial/TelaInicial'
import TelaMatches from './pages/TelaMatches/TelaMatches'
import { BASE_URL } from './constants/Urls'
import { StyledGeral } from './components/Styled.jsx'


function App() {


  const obterCorrespondencia = () => {
    axios.get(`${BASE_URL}matches`)
  }

  const escolherPessoa = () => {
    axios.post(`${BASE_URL}choose-person`)
  }

  const limpaMatches = () => {
    const body = {
      id: '71gMbZs2txS9LDvGK5Ew',
	    choice: true
    }
    axios.put(`${BASE_URL}clear`, body)
      .then((res) =>{
        alert('Matches limpados com sucesso!')
      })
      .catch((err) =>{
        alert('Algo deu errado! Tente novamente')
      })
  }



  return (
    <StyledGeral>
      
        <TelaInicial />
        <TelaMatches />
      
    </StyledGeral>
  )
}

export default App

  // const [paginaRenderizada, setPaginaRenderizada] = useState('perfil')

  // const renderizaPagina = (event) => {
  //   setPaginaRenderizada(event.target.value)

  //   if(paginaRenderizada === 'perfil') {
  //     setPaginaRenderizada('matches')
  //   } else {
  //     setPaginaRenderizada('perfil')
  //   }
  // }

  // const pegaPagina = () => {
  //   switch (paginaRenderizada) {
  //     case 'perfil':
  //       return <Perfil />
  //     case 'matches':
  //       return <Matches />
  //     default:
  //       return < Perfil/>    
  //   }
  // }



// {pegaPagina()}
//       <BotoesMatches>
//       <button value='matches' onClick={renderizaPagina}>{paginaRenderizada === 'perfil' ? 'Ir para Matches'}</button>
//         <button onClick={LimpaMatches}> Limpa Matches </button>
//       </BotoesMatches>