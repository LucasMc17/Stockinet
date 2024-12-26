import { Link } from "react-router-dom";
import UseLoginStatus from "../../hooks/UseLoginStatus";
import { useStytch } from "@stytch/react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const loggedIn = UseLoginStatus();
  const stytch = useStytch();

  function logOut() {
    stytch.session.revoke();
    navigate("/");
  }

  return (
    <header>
      <h2>Stockinette</h2>
      {loggedIn ? (
        <>
          <h3>Welcome back, USER!</h3>
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        <Link to="/login">
          <h3>Log in</h3>
        </Link>
      )}
    </header>
  );
}
