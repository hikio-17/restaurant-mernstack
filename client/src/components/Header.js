import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../helpers/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const { cart } = useSelector((state) => state.cart);

  let navigate = useNavigate();
  const handleLogout = (event) => {
    logout(() => {
      navigate("/signin");
    });
  };
  // views
  const showNavigation = () => (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link to="/" className="nav-link" aria-current="page">
                    <i className="fas fa-home"></i> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/shop" className="nav-link" aria-current="page">
                    <i className="fas fa-shopping-bag"></i> Shop
                  </Link>
                </li>
                <li className="nav-item mr-2" style={{ position: "relative" }}>
                  <Link to="/cart" className="nav-link" aria-current="page">
                    <i className="fas fa-shopping-cart"></i> Cart
                    <span
                      className="badge badge-danger"
                      style={{ position: "absolute", top: "0px" }}
                    >
                      {" "}
                      {cart.length}
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link" aria-current="page">
                    <i className="fas fa-edit"></i> Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signin" className="nav-link">
                    <i className="fas fa-sign-in-alt"></i> Signin
                  </Link>
                </li>
              </Fragment>
            )}

            {isAuthenticated() && isAuthenticated().role === 0 && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    to="/user/dashboard"
                    className="nav-link"
                    aria-current="page"
                  >
                    <i className="fas fa-home"></i> Dashboard
                  </Link>
                </li>
              </Fragment>
            )}

            {isAuthenticated() && isAuthenticated().role === 1 && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    to="/admin/dashboard"
                    className="nav-link"
                    aria-current="page"
                  >
                    <i className="fas fa-home"></i> Dashboard
                  </Link>
                </li>
              </Fragment>
            )}

            {isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <button
                    className="btn btn-link text-secondary text-decoration-none ps-0"
                    onClick={handleLogout}
                  >
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </button>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );

  // render
  return <header id="header">{showNavigation()}</header>;
};

export default Header;
