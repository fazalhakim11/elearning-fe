import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Subjects = (props) => {
    const [subjects, setSubjects] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation()
    const learningModes = location.state?.user
    const token = location.state?.user.userData.token
    
    console.log("Tes", learningModes)

    const getSubjects = async () => {
        try{
            setIsLoading(true)
            const res = await axios.get(`http://localhost:9000/api/mata_pelajaran/${learningModes.id}`, {
                headers: {
                    'Authorization' : `Bearer ${token}` // Using Bearer token authentication
                }
            })
            setSubjects(res.data.data)
            setIsLoading(false)
            console.log("Subjects", res.data.data)
        }catch (err){
            console.log(err)
        }
    }

    useEffect (()=>{
        getSubjects()
    }, [])

    const renderSubjects = () => {
        return (
            <div>
                {subjects.length > 1 ? (
                    subjects.map((subject) => (
                        <div key={subject.id}>
                            <button>
                                {subject.nama}
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="bg-[#4f7ff0] flex justify-center h-screen">
                        <div className="self-center bg-[#4773d9] rounded-lg p-5">
                            <p className="bg-[#426bca] p-5 rounded-lg text-xl font-bold text-white">Not Found</p>
                        </div>
                    </div>
                )}
            </div>
        )
    };

  return (
    <>
    {isLoading?
        <p className="mt-[50vh] text-center text-slate-900">Loading...</p>
    :
        <div>
            {renderSubjects()}
        </div>
    }
    </>
  )
};

export default Subjects
