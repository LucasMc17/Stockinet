import { useNavigate, useLocation } from "react-router-dom";
import useLoginStatus from "./UseLoginStatus";
import { useEffect } from "react";

export default function useLoggedOutRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useLoginStatus();
  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { redirect_url: location.pathname } });
    }
  }, [user]);
}
