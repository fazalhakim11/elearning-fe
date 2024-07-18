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
            setIsLoading(false)
            console.log(err)
        }
    }

    useEffect (()=>{
        getSubjects()
    }, [])

    const renderSubjects = () => {
        return (
            <>
                {subjects.length > 1 ? (
                    <>
                        <header className="bg-[#4f7ff0] rounded-xl mb-5 p-3">
                            <h1 className="text-2xl text-white mb-1 font-bold">Courses</h1>
                            <p className="text-white text-sm">Please select course you want to study</p>
                        </header>
                        {subjects.map((subject) => (
                            <div 
                                key={subject.id}
                                className={subject.nama === "Natural science" ? 
                                    "flex bg-[#44c04e] p-2 mx-3 my-4 rounded-xl"
                                :
                                    subject.nama === "Social science" ?
                                        "flex bg-[#f0974f] p-2 mx-3 my-4 rounded-xl"
                                    :
                                        "flex bg-[#4f7ff0] p-2 mx-3 my-4 rounded-xl"
                                }
                            >
                                <img 
                                    src={subject.icon} 
                                    alt={`${subject.nama}.jpg`}
                                    className="bg-white rounded-lg h-[70px]"
                                />
                                <button className="ms-3 text-white">
                                    {subject.nama}
                                </button>
                            </div>
                        ))}
                    </>
                ) : (
                    <div className="bg-[#4f7ff0] md:bg-transparent flex justify-center h-screen">
                        <div className="self-center bg-[#4773d9] rounded-lg p-5">
                            <p className="bg-[#426bca] p-5 rounded-lg text-xl font-bold text-white">Not Found</p>
                        </div>
                    </div>
                )}
            </>
        )
    };

  return (
    <>
    {isLoading?
        <div className="bg-[#4f7ff0] md:bg-transparent flex justify-center h-screen">
            <div className="self-center bg-[#4773d9] rounded-lg p-5">
            <p className="bg-[#426bca] p-5 rounded-lg text-xl font-bold text-white">Loading...</p>
            </div>
        </div>
    :
        <div>
            {renderSubjects()}
        </div>
    }
    </>
  )
};

export default Subjects
