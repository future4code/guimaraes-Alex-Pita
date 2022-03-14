import React from "react"
import {StyledMain} from '../Styled'
import axios from "axios"
import { URL_API } from "../constants/urls"
import {Head} from '../constants/urls'

class Main extends React.Component {
  state = {
    playlist: [],
    inputCriarLista: ''

  }
//aparecer lista sem precisar apertar o botão
  componentDidMount() {
    this.pegarPlaylist()
  }

pegarPlaylist = () => {
  axios.get(URL_API, Head)
  .then((res)=>{
    this.setState({playlist: res.data.result.list})
    // console.log(res.data.result.list)
  })
  .catch((err)=>{
    console.log(err.response)
  })
}

criarPlaylist = () => {
  const body = {
    name: this.state.inputCriarLista
  }
  axios.post(URL_API, body, Head)
  .then((res)=>{
    alert('Playlist criada com sucesso!')
    this.pegarPlaylist()
  })
  .catch((err)=>{
    console.log(err.response)
  })
}
deletarPlayList = (idDaPlaylist) => {
  axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idDaPlaylist}`, Head)
  .then((res)=>{ 
    this.pegarPlaylist()
    console.log(res)
  })
  .catch((err)=>{
    console.log(err.response)
  })
}

mudandoListaInput = (event) => {
  this.setState({inputCriarLista: event.target.value})
}
 
render() {
  const playListsRenderizadas = this.state.playlist.map((playlist) => {
    return <div>
              <p key={playlist.id}>{playlist.name}</p>
              <span onClick={() => this.deletarPlayList(playlist.id)}>X</span>
           </div>
  })
  return (
    <StyledMain>
        <h2>Selecionar uma playlista</h2>
        <p><strong>Musicas:</strong>{this.props.musica}</p>
        <input />
        <p><strong>Artistas:</strong>{this.props.artista}</p>
        <input />
        <p><strong>URL:</strong>{this.props.url}</p>
        <input />
        {playListsRenderizadas}
        <input 
        placeholder='digite o nome da playlist' 
        value={this.state.inputCriarLista} 
        onChange ={this.mudandoListaInput}/>
        <button onClick={this.criarPlaylist}>Criar Lista</button>
    </StyledMain>
  )
}

}

export default Main