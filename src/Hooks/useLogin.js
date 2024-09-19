// useLogin.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Services/firebaseConfig'; // Import the initialized auth instance

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // You can save the user details or token if needed
      setSuccess('Login successful!');
      localStorage.setItem('user', JSON.stringify(user)); // Store user info in local storage
      navigate('/home'); // Redirect to the dashboard or another route
    } catch (error) {
      setError(error.message); // Display Firebase error message
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, error, success, loading };
}
