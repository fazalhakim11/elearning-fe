import { useEffect, useState } from "react";

import { useGetData } from "../../hooks/useGetData";
import LearningMode from "./learningMode"
import Loading from "../../components/loading";

const Home = (props) => {
    const [isLoading, data, getClasses, user] = useGetData()
    const firstName = user.nama.split(" ")[0]
    
    useEffect (()=>{
        getClasses()
    },[])

    const [isToggle, setIsToggle] = useState(false)
    const [kelasId, setKelasId] = useState()
    const handleBtn =(kelasId)=>{
        setIsToggle(!isToggle)
        setKelasId(kelasId)
    }

    const renderClasses = () => {
        return (
            <>
            {data.length > 1 ?
                <div className="flex flex-col md:flex-row md:justify-center md:gap-8 md:flex-wrap" >
                    {data.map((kelas) => (
                        <div className="flex flex-col mb-3 md:mb-0 md:basis-1/4" key={kelas.id}>
                            <button
                                onClick={()=>handleBtn(kelas.id)}
                                disabled={kelas.id > 2} 
                                className= {kelas.id > 2 ? 
                                    "bg-slate-600 text-white self-center rounded mb-2 md:mb-0 p-2 md:py-4 w-1/2 mdd:w-1/3 md:w-[100%]" 
                                    : 
                                    "bg-[#4f7ff0] text-white self-center rounded mb-2 md:mb-0 p-2 md:py-4 w-1/2 mdd:w-1/3 md:w-[100%]"}
                            >
                                {kelas.nama}
                            </button>
                            {isToggle && kelasId === kelas.id ?
                                <LearningMode kelas={kelas.id}/>  
                            :
                                ""
                            }
                        </div>  
                    ))}
                </div>
            : (
                <div className=" flex justify-center h-screen">
                    <div className="mt-[25vh] h-max bg-[#4773d9] rounded-lg p-5">
                        <p className="bg-[#426bca] p-5 rounded-lg text-xl font-bold text-white">Not Found</p>
                    </div>
                </div>
            )}
            </>
        )
    }

  return (
    <div >
        <header className="bg-[#4f7ff0] p-3 mb-5 rounded-b-xl">
            <h1 className="text-2xl font-bold text-white">Wellcome, {firstName}!</h1>
            <h1 className=" text-lg font-medium text-white">Please select a grade</h1>
        </header>
        {isLoading? 
            <Loading home/>
        : 
            renderClasses()
        }
    </div>
  )
};

export default Home
