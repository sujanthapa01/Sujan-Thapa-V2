// useLogout.js
import { useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../Services/firebaseConfig'; // Import the initialized auth instance
import { useNavigate } from 'react-router-dom';

export default function useLogout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    setError(null);

    try {
      await signOut(auth);
      localStorage.removeItem('user'); // Remove user info from local storage
      navigate('/login'); // Redirect to login page or another route
    } catch (error) {
      setError(error.message); // Display Firebase error message
    } finally {
      setLoading(false);
    }
  };

  return { handleLogout, error, loading };
}
