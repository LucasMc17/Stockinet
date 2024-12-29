import { Link } from "react-router-dom";
import UseLoginStatus from "../../hooks/UseLoginStatus";
import { useStytch } from "@stytch/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../@redux/reducers/User/UserSlice";

export default function Header() {
  const { username } = useSelector((s) => s.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = UseLoginStatus();
  const stytch = useStytch();

  async function logOut() {
    await stytch.session.revoke();
    dispatch(clearUser());
    navigate("/");
  }

  return (
    <header>
      <h2>Stockinette</h2>
      {loggedIn ? (
        <>
          <h3>Welcome back, {username}!</h3>
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
