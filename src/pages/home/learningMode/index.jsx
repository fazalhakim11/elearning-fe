import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const LearningMode = (props) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const location = useLocation()
    const userData = location.state?.user.data
    const kelas = props.kelas
    
    const getLearingMode = async () => {
        try{
            setIsLoading(true)
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/mode_pembelajaran/${kelas}`, {
                headers: {
                    'Authorization' : `Bearer ${userData.token}` // Using Bearer token authentication
                }
            })
            setIsLoading(false)
            setData(res.data.data)
        }catch (err) {
            setIsLoading(false)
            console.log(err)
        }
    }
    
    useEffect(()=>{
        getLearingMode()
    }, [])
    
    const navigate = useNavigate()
    const handleClick =(id) => {
        navigate("/subjects", { state: { user: {id, userData} } })
    }
  return (
    isLoading ? 
    <p className="text-center self-center">Loading...</p> :
    data.map((data, index)=>
    <button 
        key={index} 
        className="text-center self-center"
        onClick={()=>handleClick(data.id)}
    >
        {data.nama}
    </button>
    )
  )
};

export default LearningMode
