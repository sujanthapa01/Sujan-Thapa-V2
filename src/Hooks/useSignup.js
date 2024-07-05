import { useDispatch, useSelector } from "react-redux";
import { signup, clearError, clearSuccess } from '../features/SignupAuth/SignupSlice';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useSignup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, success, loading } = useSelector(state => state.signupAuth); // Corrected useSelector

    const handleSignup = (username, email, password) => {
        dispatch(signup({ username, email, password })).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') { // Corrected 'fullfilled' to 'fulfilled'
                navigate('/signin');
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

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                dispatch(clearSuccess());
            }, 2000);
        }
    }, [success, dispatch]);

    return { handleSignup, error, success, loading };
};

export default useSignup;
