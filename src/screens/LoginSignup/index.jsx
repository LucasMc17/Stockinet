import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useStytch } from "@stytch/react";
import { fetchUser } from "../../@redux/reducers/User/UserSlice";

export default function LoginSignup({ login }) {
  const dispatch = useDispatch();
  const stytch = useStytch();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  async function onSubmit(e) {
    e.preventDefault();
    if (login) {
      console.log(state);
      const res = await stytch.passwords.authenticate({
        ...state,
        session_duration_minutes: 10,
      });
      const { user_id } = res?.user;
      dispatch(fetchUser(user_id));
    } else {
      // dispatch(fetchUser());
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