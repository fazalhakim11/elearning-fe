import axios from "axios"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import useDataStores from "../../stores/dataStores"

import Loading from "../../components/loading"
import Header from "../../components/header"
import NotFound from "../../components/notFound"
import YouTubeEmbed from "../../components/youTubeEmbed"

const Materials = (props) => {
    const { materials, setMaterials, isLoading, setIsLoading } = useDataStores()

    const location = useLocation()
    const subChapters = location.state?.data
    console.log(subChapters)

    const getMaterials = async () => {
        try {
            setIsLoading(true)
            const res = await axios.get(`http://localhost:9000/api/material/${subChapters.id}`,{
                headers: {
                    'Authorization' : `Bearer ${subChapters.token}`
                }
            })
            console.log(res.data.data)
            setMaterials(res.data.data)
            setIsLoading(false)
        } catch (err) {
            setMaterials([])
            setIsLoading(false)
            console.log(err)
        }
    }

    useEffect(()=>{
        getMaterials()
    },[])

    const materialTypeVideo = (material) => {
        if (material.tipe === "Video" ){
            return (
                <iframe 
                    height='280'
                    src={`${material.thumbnail}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded YouTube Video"
                    className="rounded-lg w-[100%]"
                ></iframe>
            )
        } 
    }

    const materialTypeNotVideo = (material) => {
        if(material.tipe === "Single Quiz" || material.tipe === "Summary") {
            return (
                <img 
                    src="https://lh3.googleusercontent.com/d/1GCqFi2YUfhdy3cMIcnm5t9gjC0A7B6Lc" 
                    alt="Single Quiz" 
                    className="h-[70px]"/>
            )
        } else if (material.tipe === "End Quiz") {
            return (
                <img 
                    src="https://lh3.googleusercontent.com/d/1B2EL3CcQL_7j2hZK_m3F8KFTSaRwFMRl" 
                    alt="End Quiz" 
                    className="h-[67px] ms-2"/>
            )
        } 
    }

  return (
    <>
      {isLoading?
        <Loading/>
      : 
        <>
            <Header name="Materials"/>
            {materials.length > 1 ?
                <div className="mx-3 mdd:mx-0 mdd:flex mdd:flex-wrap justify-around gap-y-5">
                    {materials.map(material =>  
                        <div 
                        key={material.id}
                        className="bg-[#dadada] mb-3 mdd:mb-0 rounded-lg basis-[48%] md:basis-[45%]"
                        >   
                            {/* {materialTypeVideo(material)} */}
                            <YouTubeEmbed material={material}/>
                            <div className="p-2 flex">
                                {materialTypeNotVideo(material)}
                                <div>
                                    <h1 className="mb-1">{material.nama}</h1>
                                    {material.checked?
                                        <img 
                                            src="https://lh3.googleusercontent.com/d/1MnQq0s1vY7zTT-wLaINUv9U_Pqof1lVP" 
                                            alt="Checked" 
                                            className="h-[20px]"
                                        />
                                    :    
                                        <div className="flex">
                                            <div className="flex">
                                                <img 
                                                    src="https://lh3.googleusercontent.com/d/1SnwBBv_9fky30lURjxdmCnBs_tq1oXyg" 
                                                    alt="Icon XP" 
                                                    className="w-[20px]"
                                                />
                                                <p className="ms-2">{material.xp}</p>
                                            </div>
                                            <div className="flex">
                                                <img 
                                                    src="https://lh3.googleusercontent.com/d/1XQ-ZTJt2Kx3aA_bv-Qvv6NcZGuyfejOt" 
                                                    alt="Icon XP" 
                                                    className="w-[20px] ms-4"
                                                />
                                                <p className="ms-2">{material.gold}</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            :
                <NotFound name="Material"/>
            }
        </>
      }
    </>
  )
};

export default Materials
