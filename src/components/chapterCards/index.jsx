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

  const {chapters, subChapters } = useDataStores()
  const navigate = useNavigate()

  const token = props.token

  const handleClick = (id) => {
    navigate("/sub_chapters",{state: {data: {id, token}}})
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
                  : props.chapters ? 
                      `${chapter.sub_bab_gratis} Sub Chapter${chapter.sub_bab_gratis >1? "s" : ""} free`
                    :
                      ""
                  }
                </p>
                <div className={props.subChapters && !chapter.label ? "flex flex-col md:flex-row mt-[16px]" : "flex flex-col md:flex-row"}>
                  <img 
                    src={chapter.icon} 
                    alt={`${chapter.nama}.jpg`}
                    className="w-[123px] mb-3 self-center md:mr-3" 
                  />
                  <div className="w-full msm:max-w-[123px] self-center"> 
                    <p 
                      className="font-bold text-sm mdd:text-md text-[#38425a] mb-2 truncate"
                      onClick={()=>handleClick(chapter.id)}
                    >
                      {chapter.nama}
                    </p>
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
