import { useNavigate } from "react-router-dom";
import UseLoginStatus from "./UseLoginStatus";
import { useEffect } from "react";

export default function UseLoggedOutRedirect(destination = "/login") {
  const navigate = useNavigate();
  const user = UseLoginStatus();
  useEffect(() => {
    if (!user) {
      navigate(destination);
    }
  }, [user]);
}
