import { useEffect } from "react";
import { useGetKelas } from "../../hooks/useGetKelas";

const index = (props) => {
    const [isLoading, data, getClasses] = useGetKelas()
    
    useEffect (()=>{
        getClasses()
    },[])
    console.log(data)
  return (
    <>
        <h1>Pilih Kelas</h1>
        {isLoading? 
            <p>Loading...</p>
        : 
        <div>
            {data.map((kelas) => (
                <button key={kelas.id}>{kelas.nama}</button>    
            ))}
        </div>
        }
    </>
  )
};

export default index
