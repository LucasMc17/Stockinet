import { useNavigate } from "react-router-dom";
import UseLoginStatus from "./UseLoginStatus";

export default function UseLoggedOutRedirect(destination = "/login") {
  const navigate = useNavigate(),
    user = UseLoginStatus();
  if (!user) {
    navigate(destination);
  }
}
