import React from "react"
import { goToApplicationFormPage } from '../../routes/Coordinator'
import { goToBack } from '../../routes/Coordinator'
import { useNavigate } from "react-router-dom"
import { useRequestData } from '../../hooks/useRequestData'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme'
import { Button } from '@chakra-ui/react'

const ListTripsPage = () => {

const listTrips = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-bitencourt-guimaraes/trips', {}) 
console.log('list', listTrips.trips)

const navigate = useNavigate()

    return (
      <ChakraProvider theme={theme}>
        <h2>ListTripsPage</h2>
        {listTrips?.trips?.map((trip,index)=>{
         return (<><p key={trip.id}>trip: {trip.name}</p>
         <p>Description: {trip.description}</p>
         <p>Planet: {trip.planet}</p>
         <p>Date: {trip.date}</p>
         <p>DurationInDays: {trip.durationInDays}</p>
         </>)
        })}
        <Button colorScheme='blue' size='lg' onClick={()=> goToBack(navigate)}>Voltar</Button>
        <Button colorScheme='blue' size='lg' onClick={()=> goToApplicationFormPage(navigate)}>Inscrever-se</Button>
      </ChakraProvider>
    )
}
export default ListTripsPage