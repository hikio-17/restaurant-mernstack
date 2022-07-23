import React, { useState } from "react";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";
import "./signup.css";
import { Link } from "react-router-dom";
import { showErrorMsg, showSuccessMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import { signup } from "../api/auth";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  const {
    username,
    email,
    password,
    password2,
    successMsg,
    errorMsg,
    loading,
  } = formData;

  /* ======== EVENT HANDLER ================ */
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      successMsg: "",
      errorMsg: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    // client-side validator
    if (
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(password)
    ) {
      setFormData({
        ...formData,
        errorMsg: "All fields are required",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid email",
      });
    } else if (!equals(password, password2)) {
      setFormData({
        ...formData,
        errorMsg: "Passwords do not match",
      });
    } else {
      // success
      const { username, email, password } = formData;
      const data = { username, email, password };

      setFormData({
        ...formData,
        loading: true,
      });
      // send data
      signup(data)
        .then((response) => {
          console.log("Axios signup success: ", response);
          setFormData({
            username: "",
            email: "",
            password: "",
            password2: "",
            loading: false,
            successMsg: response.data.successMessage,
          });
        })
        .catch((err) => {
          console.log("Axios signup error: ", err);
          setFormData({
            ...formData,
            loading: false,
            errorMsg: err.response.data.errorMessage,
          });
        });
    }
  };

  /*============= views ================== */
  const showSignupForm = () => (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      {/* username */}
      <div className="form-group input-group mb-3">
        <span className="input-group-text">
          <i className="fa fa-user"></i>
        </span>
        <input
          name="username"
          value={username}
          className="form-control"
          placeholder="Username"
          type="text"
          onChange={handleChange}
        />
      </div>

      {/* email */}
      <div className="form-group input-group mb-3">
        <span className="input-group-text">
          <i className="fa fa-envelope"></i>
        </span>
        <input
          name="email"
          value={email}
          className="form-control"
          placeholder="Email address"
          type="email"
          onChange={handleChange}
        />
      </div>
      {/* password */}
      <div className="form-group input-group mb-3">
        <span className="input-group-text">
          <i className="fa fa-lock"></i>
        </span>
        <input
          name="password"
          value={password}
          className="form-control"
          placeholder="Create password"
          type="password"
          onChange={handleChange}
        />
      </div>

      {/* confirm password */}
      <div className="form-group input-group mb-3">
        <span className="input-group-text">
          <i className="fa fa-lock"></i>
        </span>
        <input
          name="password2"
          value={password2}
          className="form-control"
          placeholder="Confirm password"
          type="password"
          onChange={handleChange}
        />
      </div>

      {/* signup button */}
      <div className="form-group d-grid gap-2 mb-3">
        <button type="submit" className="btn btn-primary ">
          Signup
        </button>
      </div>

      {/* have an account */}
      <p className="text-center text-white mb-3">
        Have an account? <Link to="/signin">Log In</Link>
      </p>
    </form>
  );

  return (
    <div className="signup-container">
      <div className="row px-3 vh-100">
        <div className="col-md-5 mx-auto align-self-center">
          {successMsg && showSuccessMsg(successMsg)}
          {errorMsg && showErrorMsg(errorMsg)}
          {loading && <div className="text-center pb-4">{showLoading()}</div>}
          {showSignupForm()}
          {/* <p style={{ color: "white" }}>{JSON.stringify(formData)}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
