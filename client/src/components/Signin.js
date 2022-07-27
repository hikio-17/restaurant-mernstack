import React, { useEffect, useState } from "react";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { Link, useNavigate } from "react-router-dom";
import { showErrorMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import { isAuthenticated, setAuthentication } from "./../helpers/auth";
import { signin } from "../api/auth";

const Signin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role === 1) {
      navigate("/admin/dashboard");
    } else if (isAuthenticated() && isAuthenticated().role === 0) {
      navigate("/user/dashboard");
    }
  }, [navigate]);
  const [formData, setFormData] = useState({
    email: "fajritio376@gmail.com",
    password: "hikio010217",
    errorMsg: false,
    loading: false,
  });

  const { email, password, errorMsg, loading } = formData;

  /** ================  EVENT HANDLER =============== */
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      errorMsg: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // client-side validator
    if (isEmpty(email) || isEmpty(password)) {
      setFormData({
        ...formData,
        errorMsg: "All fields are required",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid email",
      });
    } else {
      const { email, password } = formData;
      const data = { email, password };
      setFormData({
        ...formData,
        loading: true,
      });
      signin(data)
        .then((response) => {
          setAuthentication(response.data.token, response.data.user);

          if (isAuthenticated() && isAuthenticated().role === 1) {
            console.log("Redirecting to admin dashboard");
            navigate("/admin/dashboard");
          } else {
            console.log("Redirecting to user dashboard");
            navigate("/user/dashboard");
          }
        })
        .catch((err) => {
          console.log("sigin api function error: ", err);
          setFormData({
            ...formData,
            loading: false,
            errorMsg: err.response.data.errorMessage,
          });
        });
    }
  };

  /* ==================== views ================= */
  const showSigninForm = () => (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
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

      {/* signin button */}
      <div className="form-group d-grid gap-2 mb-3">
        <button type="submit" className="btn btn-primary ">
          Signin
        </button>
      </div>

      {/* already an account */}
      <p className="text-center text-white mb-3">
        Don't have an account? <Link to="/signup">Register here</Link>
      </p>
    </form>
  );
  return (
    <div className="signin-container">
      <div className="row px-3 vh-100">
        <div className="col-md-5 mx-auto align-self-center">
          {errorMsg && showErrorMsg(errorMsg)}
          {loading && <div className="text-center pb-4">{showLoading()}</div>}
          {showSigninForm()}
          {/* <p style={{ color: "white" }}>{JSON.stringify(formData)}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Signin;
