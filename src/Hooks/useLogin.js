import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useLogin = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [login, setLogin] = useState(false) ;
    
    const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:7000/login', { email, password });
      const  {token}  = response.data;
      if(!token){
        setLogin(false);
      }else{
        setLogin(true)
      }
      console.log('Response data:', response.data);
      localStorage.setItem('token', token);
      setSuccess('Login successful');
      navigate('/');
    } catch (error) {
      console.error('Login error:', error.response);
      setError('Invalid email or password');
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return { handleLogin, error, success, login};
};

export default useLogin;
