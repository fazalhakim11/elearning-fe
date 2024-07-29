import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const LearningMode = (props) => {
    const [data, setData] = useState([])

    const location = useLocation()
    const userData = location.state?.user.data
    const kelas = props.kelas
    
    const getLearingMode = async () => {
        try{
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/mode_pembelajaran/${kelas}`, {
                headers: {
                    'Authorization' : `Bearer ${userData.token}` // Using Bearer token authentication
                }
            })
            setData(res.data.data)
        }catch (err) {
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
