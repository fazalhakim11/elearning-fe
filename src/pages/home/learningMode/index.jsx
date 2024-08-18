import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import useDataStores from "../../../stores/dataStores";

const LearningMode = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const userData = location.state?.user.data;
  const kelas = props.kelas;

  const getLearingMode = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/mode_pembelajaran/${kelas}`,
        {
          headers: {
            Authorization: `Bearer ${userData.token}`, // Using Bearer token authentication
          },
        }
      );
      setIsLoading(false);
      setData(res.data.data);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getLearingMode();
  }, []);

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate("/subjects", { state: { user: { id, userData } } });
  };

  const {isToggle, setIsToggle} = useDataStores()

  return isLoading ? (
    <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4f7ff0] text-white p-5 rounded">
      Loading...
    </p>
  ) : (
    <div className="animate__animated animate__fadeIn w-max flex flex-col absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4f7ff0] text-white p-3 rounded-lg">
      <div className="flex">
        <h1 className="font-bold text-lg mb-1">Learning Modes</h1>
        <button onClick={()=>setIsToggle(!isToggle)} className="w-max h-max text-center px-1.5 ms-3 rounded text-white">
          X
        </button>
      </div>
      <div>
        {data.map((data) => (
          <button
            key={data.id}
            className="block"
            onClick={() => handleClick(data.id)}
          >
            {data.nama}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LearningMode;
