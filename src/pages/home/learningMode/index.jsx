import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";


const LearningMode = (props) => {
    const [data, setData] = useState([])

    const location = useLocation()
    const user = location.state?.user.data
    const kelas = props.kelas

    const getLearingMode = async () => {
        try{
            const res = await axios.get(`http://localhost:9000/api/mode_pembelajaran/${kelas}`, {
                headers: {
                    'Authorization' : `Bearer ${user.token}` // Using Bearer token authentication
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
  return (
    data.map((data, index)=>
    <button 
        key={index} 
        className="text-center self-center">
      {data.nama}
    </button>
    )
  )
};

export default LearningMode
