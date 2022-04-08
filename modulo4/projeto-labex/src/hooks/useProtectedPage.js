import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const useProtectedPage = () => {

    const navigate = useNavigate()
  
    useEffect(() => {
      const token = localStorage.getItem('token')
  
      if (token === null){
        console.log('user não está logade')
        navigate('/')
      }
    }, [])
}

export default useProtectedPage