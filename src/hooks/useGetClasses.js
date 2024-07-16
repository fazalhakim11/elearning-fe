import { useState } from "react"
import axios from "axios";

export const useGetClasses =()=>{
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const getClasses = async ()=>{
        try{
            setIsLoading(true)
            const res = await axios.get("http://localhost:9000/api/kelas/",{
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGV4YW1wbGUuY29tIiwiaWF0IjoxNzIxMTEzODU1fQ.w_D526puC22nnswiLwNX3RJHFmEoyySwJJli0FjDews` // Using Bearer token authentication
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