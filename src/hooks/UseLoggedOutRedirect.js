import { useNavigate, useLocation } from "react-router-dom";
import UseLoginStatus from "./UseLoginStatus";
import { useEffect } from "react";

export default function UseLoggedOutRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = UseLoginStatus();
  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { redirect_url: location.pathname } });
    }
  }, [user]);
}
