import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./SiteHeader.module.scss";
import GeneralHeader from "./GeneralHeader.jsx";
import WorkspaceHeader from "./WorkspaceHeader.jsx";
import { useLoginStatus } from "../../hooks";
import { useStytch } from "@stytch/react";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../../@redux/reducers/User/UserSlice";

export default function SiteHeader({ workspace }) {
  const { username } = useSelector((s) => s.user);
  const loggedIn = useLoginStatus();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      {workspace ? <WorkspaceHeader /> : <GeneralHeader />}
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
