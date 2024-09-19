import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import useDataStores from "../../stores/dataStores";

import Loading from "../../components/loading"
import Header from "../../components/header"
import NotFound from "../../components/notFound"
import { jwtDecode } from "jwt-decode";
import { useGetData } from "../../hooks/useGetData";
import { axiosJWT } from "../../lib/axios";

const Subjects = (props) => {
    const [data, user, userId, getClasses, getToken] = useGetData()
    const {isLoading, setIsLoading, token} = useDataStores()
    const [subjects, setSubjects] = useState([])

    const location = useLocation()
    const id = location.state?.id
    const learningModes = id

    const navigate = useNavigate()

    const getSubjects = async () => {
        try{
            setIsLoading(true)
            const res = await axiosJWT.get(`${import.meta.env.VITE_API_URL}/api/mata_pelajaran/${learningModes}`, {
                headers: {
                    'Authorization' : `Bearer ${token}`
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
        getToken()
        getSubjects()
    }, [])

    const setCourseBg = (subject) => {
        if (subject === "Natural science") {
            return " bg-[#2dc75b] "
        } else if (subject === "Social science") {
            return " bg-[#f0cd4f] "
        } else {
            return " bg-[#4f7ff0] "
        }
    }

    const handleClick = (id) => {
        navigate("/chapters", {state: {data: { userId, id }}})
    }

    const renderSubjects = () => {
        return (
            <>
                <Header name="Courses"/>
                {subjects.length > 1 ? (
                        <div className="flex mdd:justify-between md:justify-start mdd:gap-3 lg:gap-6 mdd:m-8 flex-wrap">
                        {subjects.map((subject) => (
                                <button 
                                    key={subject.id}
                                    className={`${setCourseBg(subject.nama)} flex md:basis-1/4 p-2 mx-3 mb-4 mdd:m-0 rounded-xl grow`}
                                    onClick={()=>handleClick(subject.id)}
                                >
                                    <img 
                                        src={subject.icon} 
                                        alt={`${subject.nama}.jpg`}
                                        className="rounded-lg h-[70px] lg:h-[100px]"
                                    />
                                    <h1 
                                        className="ms-3 text-white font-bold self-center"
                                    >
                                        {subject.nama}
                                    </h1>
                                </button>
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
