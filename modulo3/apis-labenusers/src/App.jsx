import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {

  state = {
    listaUser: []
  }

  listarTodosUser = () =>{
    axios
      .get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', 
        {
          headers:{
             Authorization: 'alex-bitencourt-guimaraes'
          } 
        }  
      )
      .then((res) => {
        this.setState({listaUser: res.data.list})
        console.log(res.data.list);
      })
      .catch((err) => console.log(err))

  }

  render() {
    return (
      <div className="App">
        <div>
        <button onClick={this.listarTodosUser}>Trocar de Tela</button>
        </div>
         <input placeholder="Nome"/>
         <input placeholder="E-mail"/>
         <button onClick={this.listarTodosUser}>Criar Usuário</button>
               
      </div>
    );
  }

}



export default App;