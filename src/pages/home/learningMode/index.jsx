import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import useDataStores from "../../../stores/dataStores";
import learning from "../../../assets/image/learning.png";

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
            Authorization: `Bearer ${userData.token}`,
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

  const { isToggle, setIsToggle } = useDataStores();

  return isLoading ? (
    <Loading />
  ) : (
    <div className="animate__animated animate__fadeIn w-[60%] mdd:w-[40%] md:w-[30%] flex flex-col absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#eaeaea] text-black text-center py-5 px-3 rounded-xl">
      <img
        src={learning}
        alt="Learning"
        className="w-[30px] md:w-[40px] mx-auto mb-3"
      />
      <h1 className="font-bold text-lg mb-3">Learning Modes</h1>
      <div>
        {data.map((data) => (
          <button
            key={data.id}
            className="block mx-auto leading-snug"
            onClick={() => handleClick(data.id)}
          >
            {data.nama}
          </button>
        ))}
      </div>
      <button
        onClick={() => setIsToggle(!isToggle)}
        className="w-max h-max px-5 py-2 mt-5 mx-auto rounded-[20px] bg-[#4f7ff0] text-white"
      >
        Close
      </button>
    </div>
  );
};

export default LearningMode;

const Loading = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    show &&
    <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#eaeaea] text-black p-5 rounded-xl">
      Loading...
    </p>
  );
};
