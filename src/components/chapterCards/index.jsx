
import useDataStores from "../../stores/dataStores"

import Header from "../header"
import NotFound from "../notFound"

const index = (props) => {
  const chapters = useDataStores(state => state.chapters)

  return (
    <>
      <Header name="Chapters"/>
      {chapters.length > 1 ? 
        <>
          {chapters.map((chapter)=>
            <div key={chapter.id}>
              <p>{chapter.nama}</p>
              <p>Progress {(chapter.finalProgress*100).toFixed(2)}%</p>
              <p>{chapter.sub_bab_gratis} Sub Chapter{chapter.sub_bab_gratis >1? "s" : ""} free</p>
            </div>
          )}
        </>
      :
        <NotFound name="Chapter"/>
      }
    </>
  )
};

export default index
