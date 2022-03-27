import React from "react";
import Aside from './components/Aside'
import Headers from './components/Headers'
import Main from './components/Main'
import {StyledApp} from './Styled.jsx'

class App extends React.Component {
  render() {
    return (
      <StyledApp>
        <Headers/>
        <Main
            musica={''}
            artista={''}
            url={''}
        />
        <Aside
            imagem={'https://cdn-icons-png.flaticon.com/512/96/96463.png'}
        />
      </StyledApp>
    )
  }
  
}

export default App
