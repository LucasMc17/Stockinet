import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useStytch } from "@stytch/react";
import { fetchUser, signUp } from "../../@redux/reducers/User/UserSlice";
import { useNavigate } from "react-router-dom";

export default function LoginSignup({ login }) {
  const dispatch = useDispatch();
  const stytch = useStytch();
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
  });

  async function onSubmit(e) {
    e.preventDefault();
    if (login) {
      const res = await stytch.passwords.authenticate({
        email: state.email,
        password: state.password,
        session_duration_minutes: 60,
      });
      const { user_id } = res?.user;
      dispatch(fetchUser(user_id));
      navigate("/");
    } else {
      const res = await stytch.passwords.create({
        email: state.email,
        password: state.password,
        name: {
          first_name: state.username,
        },
        session_duration_minutes: 60,
      });
      const { user_id } = res?.user;
      dispatch(
        signUp({
          stytchId: user_id,
          email: state.email,
          username: state.username,
        }),
      );
      navigate("/");
    }
  }

  function onChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  return (
    <div className="card">
      <h2>
        {login
          ? "Log in to get the most out of your Stockinette account"
          : "Sign up to start using Stockinette"}
      </h2>
      <form onSubmit={onSubmit} onChange={onChange}>
        <label>Email:</label>
        <input name="email" value={state.email} type="text" />
        {!login && (
          <>
            <label>Username:</label>
            <input name="username" value={state.username} type="text" />
          </>
        )}
        <label>Password:</label>
        <input name="password" value={state.password} type="password" />
        <button type="submit">{login ? "Log in" : "Sign up"}</button>
      </form>
      <p>
        {login ? (
          <>
            New to Stockinette? <Link to="/signup">Make an account!</Link>
          </>
        ) : (
          <>
            Already have an account? <Link to="/login">Log in now!</Link>
          </>
        )}
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
