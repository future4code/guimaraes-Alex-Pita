import { useEffect, useState } from "react"
import axios from "axios"

export const useRequestData = (url, estadoInicial) => {
    const [respApi, setRespApi] = useState(estadoInicial)

    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            console.log(res.data)
            setRespApi(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [url])

    return respApi

}