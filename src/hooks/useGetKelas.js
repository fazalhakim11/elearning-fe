import { useState } from "react"
import axios from "axios";

export const useGetKelas =()=>{
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const getClasses = async ()=>{
        try{
            setIsLoading(true)
            const res = await axios.get("http://localhost:9000/api/kelas/",{
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGV4YW1wbGUuY29tIiwiaWF0IjoxNzIxMDM1NDYwfQ.uC5JkyCEqX_YtGPumFcT46Kn4p-_qqPC_kVAx9pW5vE` // Using Bearer token authentication
                }
            }) 
            setIsLoading(false)
            setData(res.data.data)
        } catch (err){
            console.log(err)
        }
    } 
    return [ isLoading, data, getClasses]
}