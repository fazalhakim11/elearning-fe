import axios from "axios";

export const axiosJWT = axios.create();

axiosJWT.interceptors.request.use(
  async (config) => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/auth/token`,
      {
        withCredentials: true,
      }
    );
    console.log("JWT");
    config.headers.Authorization = `Bearer ${res.data.token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
