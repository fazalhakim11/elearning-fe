import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import { useGetData } from "../../hooks/useGetData";
import LearningMode from "./learningMode";
import Loading from "../../components/loading";
import useDataStores from "../../stores/dataStores";

import image1 from "../../assets/image/Grade Image (1).png";

const Home = (props) => {
  const [isLoading, data, user, getClasses, getToken] = useGetData();
  const firstName = user.split(" ")[0];

  useEffect(() => {
    getToken();
    getClasses();
  }, []);

  const { isToggle, setIsToggle, kelasId, setKelasId } = useDataStores();
  const handleBtn = (kelasId) => {
    setIsToggle(!isToggle);
    setKelasId(kelasId);
  };

  const renderClasses = () => {
    return (
      <>
        {data.length > 1 ? (
          <div className="grid mdd:grid-cols-4 grid-cols-2 gap-1 sm:gap-5 md:gap-7 mb-5 mx-5 md:mx-[5rem]">
            {data.map((kelas) => (
              <div className="flex flex-col md:mb-0" key={kelas.id}>
                <button
                  onClick={() => handleBtn(kelas.id)}
                  disabled={kelas.id > 2}
                  className={
                    kelas.id > 2
                      ? "bg-slate-600 text-white font-bold self-center rounded-xl md:mb-0 p-2 md:py-4 w-[100%] "
                      : `bg-[${kelas.bg_color}] text-white font-bold self-center rounded-xl md:mb-0 p-2 md:py-4 w-[100%] `
                  }
                >
                  <img src={kelas.id > 2 ? image1 : kelas.image} alt="" />
                  {kelas.nama}
                </button>
                {isToggle && kelasId === kelas.id ? (
                  <LearningMode kelas={kelas.id} />
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        ) : ((
            <div className=" flex justify-center h-screen">
              <div className="mt-[25vh] h-max bg-[#4773d9] rounded-lg p-5">
                <p className="bg-[#426bca] p-5 rounded-lg text-xl font-bold text-white">
                  Loading...
                </p>
              </div>
            </div>
          )
        )}
      </>
    );
  };

  return (
    <div>
      {isLoading ? (
        <Loading home />
      ) : (
        <>
          <header className="bg-white p-5 md:px-[5rem] mb-5 rounded-b-xl drop-shadow-xl">
            <h1 className="text-2xl font-bold text-black">
              Wellcome, {firstName}!
            </h1>
            <h1 className=" text-lg font-medium text-black">
              Please select a grade
            </h1>
          </header>
          {renderClasses()}
        </>
      )}
    </div>
  );
};

export default Home;
