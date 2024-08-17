import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

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
  return isLoading ? (
    <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4773d9] text-white p-5 rounded">
      Loading...
    </p>
  ) : (
    <div className="w-max flex flex-col absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4773d9] text-white p-3 rounded">
      <h1 className="font-bold text-lg mb-1">Learning Modes</h1>
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
        <button className="w-1/2 text-center px-1 bg-white rounded mt-3 text-black">Close</button>
    </div>
  );
};

export default LearningMode;
