import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const index = (props) => {
    const [subjects, setSubjects] = useState([])
    const location = useLocation()
    const learningModes = location.state?.user
    const token = location.state?.user.userData.token
    
    console.log("Tes", learningModes)

    const getSubjects = async () => {
        try{
            const res = await axios.get(`http://localhost:9000/api/mata_pelajaran/${learningModes.id}`, {
                headers: {
                    'Authorization' : `Bearer ${token}` // Using Bearer token authentication
                }
            })
            setSubjects(res.data.data)
            console.log("Subjects", res.data.data)
        }catch (err){
            console.log(err)
        }
    }

    useEffect (()=>{
        getSubjects()
    }, [])

  return (
    subjects.length > 1 ?
        subjects.map((subject)=>
            <div key={subject.id}>
                {subject.nama}
            </div>
        )
    :
        <p>Not Found</p>
  )
};

export default index
