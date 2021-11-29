import React, { useState } from "react";
import api from "../../../utils/api";
import { Link } from "react-router-dom";
// import { BrowserRouter as Link } from "react-router-dom";
import "./styles.css";
function Index() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>Successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
    } else {
      const inputData = formData;
      const res = await api.post("/login", inputData);
      console.log(res);
      setSubmitted(true);
      setError(false);
    }
  };

  return (
    <div className="auth_page">
      <div>
        <h1>Sign Up to boards</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={onChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </label>
        <div>
          New to the app?
          <Link to="/register" className="login_link">
            {" "}
            Sign Up
          </Link>
        </div>
        <button type="submit" className="submit_button">
          Sign In
        </button>
      </form>
      <Link to="/register" className="forgot_password">
        Forgot Password
      </Link>
    </div>
  );
}

export default Index;
