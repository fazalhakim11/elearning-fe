import { useEffect } from "react";

import { useGetData } from "../../hooks/useGetData";
import LearningMode from "./learningMode"
import Loading from "../../components/loading";
import useDataStores from "../../stores/dataStores";

import image1 from "../../assets/image/Grade Image (2).png"
import image2 from "../../assets/image/Grade Image (1).png"

const Home = (props) => {
    const [isLoading, data, getClasses, user] = useGetData()
    const firstName = user.nama.split(" ")[0]
    
    useEffect (()=>{
        getClasses()
    },[])

    const {isToggle, setIsToggle, kelasId, setKelasId} = useDataStores()
    const handleBtn =(kelasId)=>{
        setIsToggle(!isToggle)
        setKelasId(kelasId)
    }

    const renderClasses = () => {
        return (
            <>
            {data.length > 1 ?
                <div className="flex justify-center gap-1 sm:gap-3 mdd:gap-8 flex-wrap mb-5" >
                    {data.map((kelas) => (
                        <div className="flex flex-col md:mb-0 basis-[45%] mdd:basis-1/4" key={kelas.id}>
                            <button
                                onClick={()=>handleBtn(kelas.id)}
                                disabled={kelas.id > 2} 
                                className= {kelas.id > 2 ? 
                                    "bg-slate-600 text-white self-center rounded-xl md:mb-0 p-2 md:py-4 w-[100%] " 
                                    : 
                                    "bg-[#2dc75b] text-white self-center rounded-xl md:mb-0 p-2 md:py-4 w-[100%] "}
                            >
                                <img src={kelas.id > 2 ? image1 : image2} alt="" />
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
        <header className="bg-white p-5 mb-5 rounded-b-xl drop-shadow-xl">
            <h1 className="text-2xl font-bold text-black">Wellcome, {firstName}!</h1>
            <h1 className=" text-lg font-medium text-black">Please select a grade</h1>
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
