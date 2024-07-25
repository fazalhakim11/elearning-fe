import axios from "axios"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import useDataStores from "../../stores/dataStores"

import Loading from "../../components/loading"
import ChapterCards from "../../components/chapterCards"

const SubChapters = (props) => {
    const { subChapters, setSubChapters, isLoading, setIsLoading } = useDataStores()

    const location = useLocation()
    const chapters = location.state?.data
    const userId = chapters.userId

    const getSubChapters = async () => {
        try {
          setIsLoading(true)
          const res = await axios.get(`http://localhost:9000/api/sub_bab/${chapters.id}`,{
            headers: {
              'Authorization' : `Bearer ${chapters.token}`
            }
          })
          setSubChapters(res.data.sub_bab)
          setIsLoading(false)
        }catch (err) {
          setSubChapters([])
          setIsLoading(false)
          console.log(err)
        }
      }
    
      useEffect(()=>{
        getSubChapters()
      }, [])

  return (
    <>
      {isLoading?
        <Loading/>
      : 
        <ChapterCards userId={userId} token={chapters.token} subChapters/>
      }
    </>
  )
};

export default SubChapters
