import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import useDataStores from "../../stores/dataStores";

import Loading from "../../components/loading"
import Header from "../../components/header"
import NotFound from "../../components/notFound"

const Subjects = (props) => {
    const {isLoading, setIsLoading} = useDataStores()
    const [subjects, setSubjects] = useState([])

    // console.log("Subjects", subjects)

    const location = useLocation()
    const learningModes = location.state?.user
    const token = location.state?.user.userData.token
    const userId = location.state?.user.userData.id

    const navigate = useNavigate()

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
        }catch (err){
            setIsLoading(false)
            console.log(err)
        }
    }

    useEffect (()=>{
        getSubjects()
    }, [])

    const setCourseBg = (subject) => {
        if (subject === "Natural science") {
            return "flex md:basis-1/4 bg-[#44c04e] p-2 mx-3 my-4 mdd:m-0 rounded-xl"
        } else if (subject === "Social science") {
            return "flex md:basis-1/4 bg-[#f0974f] p-2 mx-3 my-4 mdd:m-0 rounded-xl"
        } else {
            return "flex md:basis-1/4 bg-[#4f7ff0] p-2 mx-3 my-4 mdd:m-0 rounded-xl"
        }
    }

    const handleClick = (id) => {
        navigate("/chapters", {state: {data: { userId, id, token}}})
    }

    const renderSubjects = () => {
        return (
            <>
                <Header name="Courses"/>
                {subjects.length > 1 ? (
                        <div className="mdd:flex mdd:justify-between md:justify-start md:gap-3 lg:gap-6 mdd:m-8 flex-wrap">
                        {subjects.map((subject) => (
                                <div 
                                    key={subject.id}
                                    className={setCourseBg(subject.nama)}
                                >
                                    <img 
                                        src={subject.icon} 
                                        alt={`${subject.nama}.jpg`}
                                        className="rounded-lg h-[70px] lg:h-[100px]"
                                    />
                                    <button 
                                        className="ms-3 text-white"
                                        onClick={()=>handleClick(subject.id)}
                                    >
                                        {subject.nama}
                                    </button>
                                </div>
                        ))}
                        </div>
                ) : (
                    <NotFound name="Course"/>
                )}
            </>
        )
    };

  return (
    <>
    {isLoading?
        <Loading/>
    :
        renderSubjects()        
    }
    </>
  )
};

export default Subjects
