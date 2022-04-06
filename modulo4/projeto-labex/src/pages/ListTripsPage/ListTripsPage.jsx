// import { useNavigate } from "react-router-dom"
// import { goToApplicationFormPage } from '../../routes/Coordinator'
// import { goToBack } from '../../routes/Coordinator'
import { useRequestData } from '../../hooks/useRequestData'

const ListTripsPage = () => {

const listTrips = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/aluno/trips', {})  

// const navigate = useNavigate()

    return (
      <div>
        <h2>ListTripsPage</h2>
        <p>{listTrips.trips}</p>
        {/* <button onClick={()=> goToBack(navigate)}>Voltar</button>
        <button onClick={()=> goToApplicationFormPage(navigate)}>Inscrever-se</button> */}

      </div>
    )
  }
  
  export default ListTripsPage 