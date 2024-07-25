import { useNavigate } from "react-router-dom"

import useDataStores from "../../stores/dataStores"

import Header from "../header"
import NotFound from "../notFound"
import ProgressBar from "../progressBar"

const index = (props) => {
  
  const subOrChapters = () => {
    if (props.subChapters) {
      return subChapters
    } else {
      return chapters
    }
  }

  const subOrChaptersLabel = (chapter) => {
    if (props.chapters) {
      return `${chapter.sub_bab_gratis} Sub Chapter${chapter.sub_bab_gratis >1? "s" : ""} free` 
    } else {
      return ""
    }
  }

  const {chapters, subChapters } = useDataStores()
  const navigate = useNavigate()

  const token = props.token
  const userId = props.userId

  const handleClick = (id) => {
    if (props.chapters) {
      navigate("/sub_chapters",{state: {data: {userId, id, token}}})
    } else if (props.subChapters) {
      navigate("/materials",{state: {data: {userId, id, token}}})
    }
  }

  return (
    <>
      <Header name={`${props.subChapters ? "Sub Chapters" : "Chapters" }`}/>
      {subOrChapters().length > 1 ? 
        <div className="flex justify-between flex-wrap gap-4 m-3">
          {subOrChapters().map((chapter)=>
            <div 
                key={chapter.id}
                className="bg-[#ededed] drop-shadow-lg basis-[47%] mdd:basis-[30%] rounded-lg p-2"
            >
                <p
                  className="bg-[#e89434] text-xs text-[#ededed] rounded-md w-max px-1"
                >
                  {props.subChapters && chapter.label ? 
                    "Free"
                  : 
                    subOrChaptersLabel(chapter)
                  }
                </p>
                <div className={props.subChapters && !chapter.label ? "flex flex-col md:flex-row mt-[16px]" : "flex flex-col md:flex-row"}>
                  <img 
                    src={chapter.icon} 
                    alt={`${chapter.nama}.jpg`}
                    className="w-[123px] mb-3 self-center md:mr-3" 
                  />
                  <div className="w-full msm:max-w-[123px] self-center"> 
                    <button 
                      className="w-full font-bold text-sm mdd:text-md text-[#38425a] mb-2"
                      onClick={()=>handleClick(chapter.id)}
                    >
                      <p className="truncate text-left mdd:text-center md:text-left">{chapter.nama}</p>
                    </button>
                    <ProgressBar progress={parseFloat((chapter.finalProgress*100 || chapter.progress*100 || 0).toFixed(0))}/>
                  </div>
                </div>
            </div>
          )}
        </div>
      :
        <NotFound name={props.chapters ? "Chapter" : "Sub Chapter"}/>
      }
    </>
  )
};

export default index
