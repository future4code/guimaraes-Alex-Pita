import React, { useEffect } from "react"
import axios from "axios"
import useProtectedPage from '../../hooks/useProtectedPage'

const TripDetailsPage = () => {

  useProtectedPage()

  useEffect(() =>{

    const token = localStorage.getItem('token')

    axios
      .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-bitencourt-guimaraes/trip', {
        headers: {
          auth: token
        }
      })
      .then((res)=> {
        console.log(res.data.trip)
        sessionStorage.setItem('token', res.token)
      })
      .catch((err)=> {
        console.log(err)
      })

  }, [])

    return (
      <div>
            <h2>TripDetailsPage</h2>
      </div>
    )
  }
  
  export default TripDetailsPage