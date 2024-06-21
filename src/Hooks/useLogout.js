import { useDispatch } from "react-redux";
import { logout } from "../features/Auth/AuthSlice";
 const useLogout = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }
return handleLogout;

}
export default useLogout;