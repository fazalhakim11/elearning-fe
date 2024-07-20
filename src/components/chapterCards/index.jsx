
import useDataStores from "../../stores/dataStores"

import Header from "../header"
import NotFound from "../notFound"

const index = (props) => {
  const chapters = useDataStores(state => state.chapters)

  return (
    <>
      <Header name="Chapters"/>
      {chapters.length > 1 ? 
        <div className="flex justify-between flex-wrap gap-4 m-3">
          {chapters.map((chapter)=>
            <div 
                key={chapter.id}
                className="bg-[#ededed] drop-shadow-lg basis-[47%] rounded-lg p-2"
            >
                <p
                    className="bg-[#e89434] text-xs text-[#ededed] rounded-md w-max px-1"
                >
                    {chapter.sub_bab_gratis} Sub Chapter{chapter.sub_bab_gratis >1? "s" : ""} free
                </p>
                <img 
                  src={chapter.icon} 
                  alt={`${chapter.nama}.jpg`}
                  className="w-[123px]" 
                />
                <p>{chapter.nama}</p>
                <p>Progress {(chapter.finalProgress*100).toFixed(2)}%</p>
            </div>
          )}
        </div>
      :
        <NotFound name="Chapter"/>
      }
    </>
  )
};

export default index
