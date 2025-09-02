import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie"; // ✅ for saving token
import "../auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["token"]); // ✅
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        inputValue,
        { withCredentials: true }
      );

      console.log("Login response:", data);

      const { success, message, token } = data;

      if (success) {
        handleSuccess(message);

        // ✅ Save token in cookies
        if (token) {
          setCookie("token", token, { path: "/" });
        }

        // ✅ Navigate immediately and replace history entry
        navigate("/", { replace: true });
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error(error);
      handleError("Login failed. Try again!");
    }
  };

  return (
    <div className="auth_page">
      <div className="form_container">
        <h2>Login Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
          <span>
            Don't have an account? <Link to={"/signup"}>Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
