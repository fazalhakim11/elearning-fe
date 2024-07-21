import axios from "axios"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import useDataStores from "../../stores/dataStores"

import Loading from "../../components/loading"
import Header from "../../components/header"
import NotFound from "../../components/notFound"

const index = (props) => {
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

  return (
    <>
      {isLoading?
        <Loading/>
      : 
        <>
            <Header name="Materials"/>
            {materials.length > 1 ?
                materials.map(material => 
                    <div 
                        key={material.id}
                        className="mb-3"
                    >
                        <p>{material.thumbnail}</p>
                        <h1>{material.nama}</h1>
                        <p>XP {material.xp}</p>
                        <p>Gold {material.gold}</p>
                    </div>
                )
            :
                <NotFound name="Material"/>
            }
        </>
      }
    </>
  )
};

export default index
