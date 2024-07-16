import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"; 

export const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:9000/api/auth/login', {
                email,
                password,
            });
            // Handle successful login, e.g., store token, redirect user
            console.log(response.data);
            navigate("/classes")
            // return response.data
        } catch (err) {
            // Handle error
            setError(err.response ? err.response.data.message : 'Login failed');
            console.error('Login failed:', err.response ? err.response.data : err); 
        }
    }
    return [email, setEmail, password, setPassword, error, setError, handleLogin]
};

 
