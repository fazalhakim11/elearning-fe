import { useState } from "react"
import { useLocation } from "react-router-dom";
import axios from "axios";

export const useGetClasses =()=>{
    const location = useLocation()
    const user = location.state?.user.data

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    
    const getClasses = async ()=>{
        try{
            setIsLoading(true)
            const res = await axios.get("http://localhost:9000/api/kelas/",{
                headers: {
                    'Authorization' : `Bearer ${user.token}` // Using Bearer token authentication
                }
            }) 
            setIsLoading(false)
            setData(res.data.data)
        } catch (err){
            setIsLoading(false)
            console.log(err)
        }
    } 
    return [ isLoading, data, getClasses, user]
}