import React, { useState, Fragment } from "react";
import { createCategory } from "./../api/category";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg, showSuccessMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";

const AdminDashboard = () => {
  const [category, setCategory] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  /** =========== event handlers ================*/

  const handleMessages = (event) => {
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleCategoryChange = (event) => {
    setErrorMsg("");
    setSuccessMsg("");
    setCategory(event.target.value);
  };

  const handleCategorySubmit = (event) => {
    event.preventDefault();

    if (isEmpty(category)) {
      setErrorMsg("Please enter a category");
    } else {
      const data = { category };

      setLoading(true);
      createCategory(data)
        .then((response) => {
          setLoading(false);
          setSuccessMsg(response.data.successMessage);
          setCategory("");
        })
        .catch((err) => {
          setLoading(false);
          setErrorMsg(err.response.data.errorMessage);
        });
    }
  };

  /** ================= views ============== */
  const showHeader = () => (
    <div className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>
              <i className="fas fa-home" style={{ letterSpacing: "2px" }}>
                {" "}
              </i>
              Dashboard
            </h1>
          </div>
        </div>
      </div>
    </div>
  );

  const showActionBtns = () => (
    <div className="bg-light my-2">
      <div className="container">
        <div className="row pb-3">
          <div className="col-md-4  my-1 d-grid gap-2">
            <button
              className="btn btn-outline-info btn-block"
              data-bs-toggle="modal"
              data-bs-target="#addCategoryModal"
            >
              <i className="fas fa-plus"> Add Category</i>
            </button>
          </div>

          <div className="col-md-4 my-1 d-grid gap-2">
            <button className="btn btn-outline-warning btn-block">
              <i className="fas fa-plus"> Add Food</i>
            </button>
          </div>

          <div className="col-md-4  my-1 d-grid gap-2">
            <button className="btn btn-outline-success btn-block">
              <i className="fas fa-money-check-alt"> Add Category</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const showCategoryModal = () => (
    <div id="addCategoryModal" className="modal" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form onSubmit={handleCategorySubmit}>
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Add Category</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body my-2">
              {errorMsg && showErrorMsg(errorMsg)}
              {successMsg && showSuccessMsg(successMsg)}

              {loading ? (
                <div className="text-center">{showLoading()}</div>
              ) : (
                <Fragment>
                  <label className="text-secondary">Category</label>
                  <input
                    name="category"
                    value={category}
                    type="text"
                    className="form-control"
                    onChange={handleCategoryChange}
                  />
                </Fragment>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-info">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  /** ============== render =================== */
  return (
    <section>
      {showHeader()}
      {showActionBtns()}
      {showCategoryModal()}
    </section>
  );
};

export default AdminDashboard;
