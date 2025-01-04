import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useStytch } from "@stytch/react";
import { fetchUser, signUp } from "../@redux/reducers/User/UserSlice";
import { useNavigate } from "react-router-dom";

export default function LoginSignupScreen({ method }) {
  const dispatch = useDispatch();
  const stytch = useStytch();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect_url = location?.state?.redirect_url;

  const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    setState({
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
    });
    setError("");
  }, [method]);

  const errorDict = {
    invalid_email: "Make sure you input a valid email",
    breached_password:
      "It looks like that password may have been involved in a data breach, please try another",
    duplicate_email: "That email already has a Stockinette account",
    weak_password:
      "That password is a bit too weak to be secure, try making it longer or adding special characters",
    unauthorized_credentials:
      "That password and email don't seem to match, please double check them",
    no_user_password:
      "It looks like you don't have a password set up for Stockinette, [MAGIC EMAIL LINK PROMPT]",
    reser_password:
      "Your password may have been involved in a data breach, please use the link below to reset it and log in",
  };

  async function handleReset() {
    try {
      const token = new URLSearchParams(window.location.search).get("token");
      if (!token) {
        setError(
          "Could not verify user, please try again from the link in your email",
        );
        return;
      }
      if (state.password !== state.confirmPassword) {
        setError("Please ensure the password fields match!");
        return;
      }
      const res = await stytch.passwords.resetByEmail({
        token,
        password: state.password,
        session_duration_minutes: 60,
      });
      navigate("/");
    } catch (err) {
      setError(
        errorDict[err.error_type] ||
          "Sorry, something went wrong, please try again",
      );
    }
  }

  async function handleLogin() {
    try {
      const res = await stytch.passwords.authenticate({
        email: state.email,
        password: state.password,
        session_duration_minutes: 60,
      });
      const { user_id } = res?.user;
      dispatch(fetchUser(user_id));
      if (redirect_url) {
        navigate(redirect_url);
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(
        errorDict[err.error_type] ||
          "Sorry, something went wrong, please try again",
      );
    }
  }

  async function handleSignup() {
    if (state.password !== state.confirmPassword) {
      setError("Please ensure the password fields match!");
      return;
    }
    if (!state.username) {
      setError("Don't forget to add a username");
      return;
    }
    try {
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
    } catch (err) {
      setError(
        errorDict[err.error_type] ||
          "Sorry, something went wrong, please try again",
      );
    }
  }

  async function handleResetStart() {
    try {
      const res = await stytch.passwords.resetByEmailStart({
        email: state.email,
        reset_password_redirect_url: "http://localhost:8000/reset-password",
      });
      if (res) {
        setError("Check your email for a reset link!");
      }
    } catch (err) {
      setError(
        errorDict[err.error_type] ||
          "Sorry, something went wrong, please try again",
      );
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    switch (method) {
      case "reset-password":
        await handleReset();
        break;
      case "login":
        await handleLogin();
        break;
      case "signup":
        await handleSignup();
        break;
      case "reset-start":
        await handleResetStart();
        break;
    }
  }

  function onChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  switch (method) {
    case "reset-password":
      return (
        <div className="card">
          <h2>Reset your Stockinette password</h2>
          <form onSubmit={onSubmit} onChange={onChange}>
            <label>New Password:</label>
            <input name="password" value={state.password} type="password" />
            <label>Confirm New Password:</label>
            <input
              name="confirmPassword"
              value={state.confirmPassword}
              type="password"
            />
            <button type="submit">Confirm New Password</button>
          </form>
          <p>{error}</p>
          <p>
            Already have an account? <Link to="/login">Log in now!</Link>
          </p>
          <Link to="/">Back to Home</Link>
        </div>
      );
    case "login":
      return (
        <div className="card">
          <h2>Log in to get the most out of your Stockinette account</h2>
          <form onSubmit={onSubmit} onChange={onChange}>
            <label>Email:</label>
            <input name="email" value={state.email} type="text" />
            <label>Password:</label>
            <input name="password" value={state.password} type="password" />
            <button type="submit">Log in</button>
          </form>
          <p>{error}</p>
          <p>
            New to Stockinette? <Link to="/signup">Make an account!</Link>
          </p>
          <p>
            Trouble logging in? <Link to="/reset">Reset your password</Link>
          </p>
          <Link to="/">Back to Home</Link>
        </div>
      );
    case "signup":
      return (
        <div className="card">
          <h2>Sign up to start using Stockinette</h2>
          <form onSubmit={onSubmit} onChange={onChange}>
            <label>Email:</label>
            <input name="email" value={state.email} type="text" />
            <label>Username:</label>
            <input name="username" value={state.username} type="text" />
            <label>Password:</label>
            <input name="password" value={state.password} type="password" />
            <label>Confirm Password:</label>
            <input
              name="confirmPassword"
              value={state.confirmPassword}
              type="password"
            />
            <button type="submit">Sign up</button>
          </form>
          <p>{error}</p>
          <p>
            Already have an account? <Link to="/login">Log in now!</Link>
          </p>
          <Link to="/">Back to Home</Link>
        </div>
      );
    case "reset-start":
      return (
        <div className="card">
          <h2>Reset your password</h2>
          <form onSubmit={onSubmit} onChange={onChange}>
            <label>Email:</label>
            <input name="email" value={state.email} type="text" />
            <button type="submit">Send email</button>
          </form>
          <p>{error}</p>
          <p>
            <Link to="/signup">Back to Login</Link>
          </p>
          <Link to="/">Back to Home</Link>
        </div>
      );
  }
}
