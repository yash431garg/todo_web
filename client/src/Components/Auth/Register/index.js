import React, { useState } from "react";
import api from "../../../utils/api";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./styles.css";
// import { BrowserRouter as Link } from "react-router-dom";
function Index() {
  // input states
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {firstname + lastname} successfully registered!!</h1>
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
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      password === ""
    ) {
      setError(true);
    } else {
      const inputData = {
        firstname,
        lastname,
        email,
        password,
      };
      const res = await api.post("/register", inputData);
      console.log(res);
      setSubmitted(true);
      setError(false);
    }
  };

  const isAuthenticated = useSelector((state) => state.auth.value);
  return (
    <React.Fragment>
      {!isAuthenticated ? (
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
              FirstName:
              <input
                type="text"
                name="firstname"
                value={firstname}
                onChange={handleFirstName}
              />
            </label>
            <label>
              LastName:
              <input
                type="text"
                name="lastname"
                value={lastname}
                onChange={handleLastName}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
              />
            </label>
            <div>
              Already have an account?
              <Link to="/login" className="login_link">
                {" "}
                Sign In
              </Link>
            </div>
            <button type="submit" className="submit_button">
              Sign Up
            </button>
          </form>
        </div>
      ) : (
        <Navigate to="/board" />
      )}
    </React.Fragment>
  );
}

export default Index;
