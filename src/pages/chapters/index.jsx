import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation,  } from "react-router-dom";

const Chapters = (props) => {
  const [chapters, setChapters] = useState([])

  const location = useLocation()
  const subjects = location.state?.data
  
  // console.log("Chapters", chapters)

  const getChapters = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/api/bab/${subjects.id}`,{
        headers: {
          'Authorization' : `Bearer ${subjects.token}`
        }
      })
      setChapters(res.data.bab)
    }catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getChapters()
  }, [])

  return (
    <>
      {chapters.map((chapter)=>
        <div key={chapter.id}>
          <p>{chapter.nama}</p>
          <p>Progress {chapter.finalProgress}</p>
          <p>Sub bab gratis {chapter.sub_bab_gratis}</p>
        </div>
      )}
    </>
  )
};

export default Chapters
