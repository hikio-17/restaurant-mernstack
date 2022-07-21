import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

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
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

  /*============= views ================== */
  const showSignupForm = () => (
    <form className="signup-form" onSubmit={handleSubmit}>
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
          {showSignupForm()}
          <p style={{ color: "white" }}>{JSON.stringify(formData)}</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
