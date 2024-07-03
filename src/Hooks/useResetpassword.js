import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../features/passwordrestSlice";
import { useNavigate } from "react-router-dom";

const useResetPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { error, success, loading, data} = useSelector((state) => state.resetPassword);

    const handleResetPassword = (email) => {
        dispatch(resetPassword({ email })).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                setTimeout(() => {
                    navigate("/login");
                }, 4000); 
            }
        });
    };

    return { handleResetPassword, error, success, loading, data};
}

export default useResetPassword;
