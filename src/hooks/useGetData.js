import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { axiosJWT } from "../lib/axios.js";
import useDataStores from "../stores/dataStores";
import { jwtDecode } from "jwt-decode";

export const useGetData = () => {
  const { token, setToken } = useDataStores();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState();
  const navigate = useNavigate();

  const getClasses = async () => {
    try {
      setIsLoading(true);
      const res = await axiosJWT.get(
        `${import.meta.env.VITE_API_URL}/api/kelas/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
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

  const getToken = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/auth/token`,
        {
          withCredentials: true,
        }
      );
      setIsLoading(false);
      const decode = jwtDecode(res.data.token);
      setToken(res.data.token)
      setUser(decode.name);
      setUserId(decode.id);
    } catch (error) {
      navigate("/login");
      setIsLoading(false);
      console.log(error);
    }
  };
  return [isLoading, data, user, userId, getClasses, getToken];
};
