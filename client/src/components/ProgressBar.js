import React from "react";
import { Link } from "react-router-dom";
const ProgressBar = ({ step1, step2, step3 }) => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {step1 ? (
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/shipping">Shipping</Link>
            </li>
          ) : (
            <li className="breadcrumb-item" aria-current="page">
              <Link
                to="/#"
                onClick={(event) => event.preventDefault()}
                style={{ textDecoration: "none", cursor: "not-allowed" }}
                className="text-muted"
              >
                Shipping
              </Link>
            </li>
          )}

          {step2 ? (
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/payment">Payment</Link>
            </li>
          ) : (
            <li className="breadcrumb-item" aria-current="page">
              <Link
                to="/#"
                onClick={(event) => event.preventDefault()}
                style={{ textDecoration: "none", cursor: "not-allowed" }}
                className="text-muted"
              >
                Payment
              </Link>
            </li>
          )}

          {step3 ? (
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/placeholder">Placeholder</Link>
            </li>
          ) : (
            <li className="breadcrumb-item" aria-current="page">
              <Link
                to="/#"
                onClick={(event) => event.preventDefault()}
                style={{ textDecoration: "none", cursor: "not-allowed" }}
                className="text-muted"
              >
                Placeholder
              </Link>
            </li>
          )}
        </ol>
      </nav>
    </>
  );
};

export default ProgressBar;
