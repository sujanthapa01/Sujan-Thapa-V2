import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../features/passwordrestSlice";
import { useNavigate } from "react-router-dom";

const useResetPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { error, success, loading, clearError, clearSuccess } = useSelector((state) => state.resetPassword);

    const handleResetPassword = (email) => {
        dispatch(resetPassword({ email })).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                setTimeout(() => {
                    navigate("/login");
                }, 8000); 
            }
        });
    };

    useEffect(() => {
        if (error) {
          // Handle/display error, e.g., show a notification
          alert(`Error: ${error}`);
        }
    
        if (success) {
          // Handle/display success, e.g., show a notification
          alert('Password reset link sent successfully!');
        }
    
        // Cleanup errors/success messages on component unmount or on new submission
        return () => {
          dispatch(clearError("error"));
          dispatch(clearSuccess("success"));
        };
      }, [error, success, dispatch]);

    return { handleResetPassword, error, success, loading, clearError, clearSuccess };
}

export default useResetPassword;
