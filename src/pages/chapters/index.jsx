import axios from "axios"
import { useEffect } from "react"
import { useLocation  } from "react-router-dom";

import useDataStores from "../../stores/dataStores"

import Loading from "../../components/loading"
import ChapterCards from "../../components/chapterCards"
import { axiosJWT } from "../../lib/axios";

const Chapters = (props) => {
  const {setChapters, isLoading, setIsLoading, token} = useDataStores()
  
  const location = useLocation()
  const subjects = location.state?.data
  const userId = subjects.userId

  const getChapters = async () => {
    try {
      setIsLoading(true)
      const res = await axiosJWT.get(`${import.meta.env.VITE_API_URL}/api/bab/${subjects.id}`,{
        headers: {
          'Authorization' : `Bearer ${token}`
        }
      })
      setChapters(res.data.bab)
      setIsLoading(false)
    }catch (err) {
      setChapters([])
      setIsLoading(false)
      console.log(err)

    }
  }

  useEffect(()=>{
    getChapters()
  }, [])

  return (
    <>
      {isLoading?
        <Loading/>
      : 
        <ChapterCards userId={userId} token={token} chapters/>
      }
    </>
  )
};

export default Chapters
