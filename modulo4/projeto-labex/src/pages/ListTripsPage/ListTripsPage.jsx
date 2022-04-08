import React from "react"
import { goToApplicationFormPage } from '../../routes/Coordinator'
import { goToBack } from '../../routes/Coordinator'
import { useNavigate } from "react-router-dom"
import { useRequestData } from '../../hooks/useRequestData'

const ListTripsPage = () => {

const listTrips = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-bitencourt-guimaraes/trips', {}) 
console.log('list', listTrips.trips)

const navigate = useNavigate()

    return (
      <div>
        <h2>ListTripsPage</h2>
        {listTrips?.trips?.map((trip,index)=>{
         return (<><p key={trip.id}>trip: {trip.name}</p>
         <p>Description: {trip.description}</p>
         <p>Planet: {trip.planet}</p>
         <p>Date: {trip.date}</p>
         <p>DurationInDays: {trip.durationInDays}</p>
         </>)
        })}
        <button onClick={()=> goToBack(navigate)}>Voltar</button>
        <button onClick={()=> goToApplicationFormPage(navigate)}>Inscrever-se</button>
      </div>
    )
}
export default ListTripsPage