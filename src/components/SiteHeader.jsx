import { Link } from "react-router-dom";
import { useLoginStatus } from "../hooks";
import { useStytch } from "@stytch/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../@redux/reducers/User/UserSlice";
import "./SiteHeader.module.scss";

export default function SiteHeader() {
  const { username } = useSelector((s) => s.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useLoginStatus();
  const stytch = useStytch();

  async function logOut() {
    await stytch.session.revoke();
    dispatch(clearUser());
    navigate("/");
  }

  return (
    <header id="site-header">
      <div>
        <h2 id="header-logo">
          <Link to="/">Stockinette</Link>
        </h2>
        {loggedIn && <h4>Welcome back, {username}!</h4>}
      </div>
      <h4>My Patterns</h4>
      <h4>Learn</h4>
      <h4>Pattern Search</h4>
      {loggedIn ? (
        <h3 onClick={logOut}>Log Out</h3>
      ) : (
        <Link to="/login">
          <h3>Log in</h3>
        </Link>
      )}
    </header>
  );
}
