import axios from "axios"
import { useEffect } from "react"
import { useLocation  } from "react-router-dom";

import useDataStores from "../../stores/dataStores"

import Loading from "../../components/loading"
import ChapterCards from "../../components/chapterCards"

const Chapters = (props) => {
  const {setChapters, isLoading, setIsLoading} = useDataStores()
  
  const location = useLocation()
  const subjects = location.state?.data
  const userId = subjects.userId

  const getChapters = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get(`http://localhost:9000/api/bab/${subjects.id}`,{
        headers: {
          'Authorization' : `Bearer ${subjects.token}`
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
        <ChapterCards userId={userId} token={subjects.token} chapters/>
      }
    </>
  )
};

export default Chapters
