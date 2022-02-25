import './App.css';
import axios from 'axios'

Class App extends React.Component {
  return (
    <div className="App">
       <h1>Olá</h1>
    
    </div>
  );
}




const urlUserslist = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers:{
      Authorization: "alex-bitencourt-guimaraes"
    }

  
}

const getAllUsers = () =>{

  axios
  .get(urlUserslist,headers)
  .then((response)=>{
    console.log(response.data.result.list);
  })
  .catch((error) =>{
    console.log(error.response);
  })
}

getAllUsers()

export default App;