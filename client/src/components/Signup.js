import React from "react";
import "./signup.css";

const Signup = () => {
  const showSignupForm = () => (
    <form className="signup-form">
      {/* username */}
      <div className="form-group input-group mb-3">
        <span className="input-group-text">
          <i className="fa fa-user"></i>
        </span>
        <input
          name=""
          className="form-control"
          placeholder="Username"
          type="text"
        />
      </div>

      {/* email */}
      <div className="form-group input-group mb-3">
        <span className="input-group-text">
          <i className="fa fa-envelope"></i>
        </span>
        <input
          name=""
          className="form-control"
          placeholder="Email address"
          type="email"
        />
      </div>
      {/* password */}
      <div className="form-group input-group mb-3">
        <span className="input-group-text">
          <i className="fa fa-lock"></i>
        </span>
        <input
          className="form-control"
          placeholder="Create password"
          type="password"
        />
      </div>

      {/* confirm password */}
      <div className="form-group input-group mb-3">
        <span className="input-group-text">
          <i className="fa fa-lock"></i>
        </span>
        <input
          className="form-control"
          placeholder="Confirm password"
          type="password"
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
        Have an account? <a href="/signin">Log In</a>
      </p>
    </form>
  );

  return (
    <div className="signup-container">
      <div className="row px-3 vh-100">
        <div className="col-md-5 mx-auto align-self-center">
          {showSignupForm()}
        </div>
      </div>
    </div>
  );
};

export default Signup;
