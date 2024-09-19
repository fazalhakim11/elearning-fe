import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import useDataStores from "../stores/dataStores";

export const useLogin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { setIsLoading, setUserId, setToken, setExp } = useDataStores();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      const decoded = jwtDecode(response.data.data.token);
      setUserId(decoded.id);
      setToken(response.data.data.token);
      setExp(decoded.exp);
      setIsLoading(false);
      navigate("/classes");
    } catch (err) {
      setIsLoading(false);
      setError(err.response ? err.response.data.message : "Login failed");
      console.error("Login failed:", err.response ? err.response.data : err);
    }
  };
  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          name,
          email,
          password,
        }
      );
      setIsLoading(false);
      alert("User successfully registered, please login");
      navigate("/");
    } catch (err) {
      setIsLoading(false);
      setError(err.response ? err.response.data.message : "Login failed");
      console.error("Login failed:", err.response ? err.response.data : err);
    }
  };
  return [
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    handleLogin,
    handleSignup,
  ];
};
