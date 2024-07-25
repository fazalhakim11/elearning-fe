import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import useDataStores from "../stores/dataStores";

export const useLogin = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null)
    const { setIsLoading, setUserId } = useDataStores()
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            setIsLoading(true)
            const response = await axios.post('http://localhost:9000/api/auth/login', {
                email,
                password,
            });
            setUserId(response.data.data.id )
            setIsLoading(false)
            // Handle successful login, e.g., store token, redirect user
            navigate("/classes", { state: { user: response.data } })
        } catch (err) {
            // Handle error
            setIsLoading(false)
            setError(err.response ? err.response.data.message : 'Login failed');
            console.error('Login failed:', err.response ? err.response.data : err); 
        }
    }
    const handleSignup = async (event) => {
        event.preventDefault();

        try {
            setIsLoading(true)
            const response = await axios.post('http://localhost:9000/api/auth/register', {
                name,
                email,
                password,
            });
            setIsLoading(false)
            console.log(response)
            // Handle successful signup, 
            alert("User successfully registered, please login")
            navigate("/", )
        } catch (err) {
            // Handle error
            setIsLoading(false)
            setError(err.response ? err.response.data.message : 'Login failed');
            console.error('Login failed:', err.response ? err.response.data : err); 
        }
    }
    return [name, setName, email, setEmail, password, setPassword, error, setError, handleLogin, handleSignup]
};

 
