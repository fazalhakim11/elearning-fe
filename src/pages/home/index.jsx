import { useEffect } from "react";
import { useGetClasses } from "../../hooks/useGetClasses";

const Home = (props) => {
    const [isLoading, data, getClasses, user] = useGetClasses()
    const firstName = user.nama.split(" ")[0]
    
    useEffect (()=>{
        getClasses()
    },[])
  return (
    <div >
        <h1 className="text-2xl font-bold text-slate-900">Halo {firstName},</h1>
        <h1 className="mb-8 text-lg font-medium text-slate-900">Silahkan pilih kelas</h1>
        {isLoading? 
            <p className="mt-[35vh] text-center text-slate-900">Loading...</p>
        : 
        <div className="flex sm:flex-col md:flex-row sm:content-center md:justify-center flex-wrap">
            {data.map((kelas) => (
                <button
                    disabled={kelas.id > 2} 
                    className= {kelas.id > 2 ? 
                        "text-[#c8c8c8] bg-slate-500 mb-5 sm:w-1/2 md:w-1/4 grow rounded sm:p-2 md:mx-2 md:py-3" 
                        : 
                        "text-[#ffffff] bg-slate-900 mb-5 sm:w-1/2 md:w-1/4 grow rounded sm:p-2 md:mx-2  md:py-3"}
                    key={kelas.id}
                >
                    {kelas.nama}
                </button>    
            ))}
        </div>
        }
    </div>
  )
};

export default Home
