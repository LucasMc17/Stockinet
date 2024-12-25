import { useNavigate } from "react-router-dom";
import UseLoginStatus from "./UseLoginStatus";
import { useDispatch } from "react-redux";
import { clearUser } from "../@redux/reducers/User/UserSlice";

export default function UseLoggedOutRedirect(destination = "/login") {
  const dispatch = useDispatch(),
    navigate = useNavigate(),
    isLoggedIn = UseLoginStatus();
  if (!isLoggedIn) {
    dispatch(clearUser());
    navigate(destination);
  }
}
