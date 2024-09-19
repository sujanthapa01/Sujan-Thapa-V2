import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function useSignup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSignup = async (username, email, password) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setSuccess('Signup successful!');
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleSignup, error, success, loading };
}
