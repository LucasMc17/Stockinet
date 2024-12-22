import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginSignup({ login }) {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    console.log(state);
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
        <label>Username:</label>
        <input name="username" value={state.username} type="text" />
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
    </div>
  );
}
