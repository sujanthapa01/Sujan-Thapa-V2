// src/hooks/useLogin.js
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { login, clearError, clearSuccess } from '../features/Auth/AuthSlice';

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, error, success, isLogin, loading } = useSelector((state) => state.auth);

  const handleLogin = (email, password) => {
    dispatch(login({ email, password })).then((response) => {
      if (response.meta.requestStatus === 'fulfilled') {
        navigate('/');
      }
    });
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(clearError());
      }, 5000);
    }
  }, [error, dispatch]);

  return { handleLogin, error, success, isLogin, token, loading };
};

export default useLogin;
