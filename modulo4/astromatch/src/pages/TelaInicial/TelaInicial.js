import React, { useEffect, useState } from "react"
import axios from 'axios'
import { BASE_URL } from '../../constants/Urls'

function TelaInicial() {
   
  const [telaRenderizada, setTelaRenderizada] = useState([])

  const renderizaTela = (event) => {
    setTelaRenderizada(event.target.value)
  }
  
  const escolhaDoPerfil = () => {
    axios.get(`${BASE_URL}person`)
    .then((res) => {
        console.log({escolhaDoPerfil: res.data.profile})

    })
    .catch((err) => {
        alert('Algo deu errado!')

    })
  }

  useEffect(() => {
    escolhaDoPerfil();
      }, []);

    return(
        <div>
            {/* {telaRenderizada.map((user, id) => <p>{user.id} - {user.age} - {user.name} - {user.photo} - {user.bio}</p>)} */}
            <h2 onClick={() => escolhaDoPerfil()} onChange={renderizaTela}>Astromatch</h2>
          
        </div>
    )
}

export default TelaInicial