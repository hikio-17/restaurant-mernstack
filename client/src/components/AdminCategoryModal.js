import React, { useState, Fragment } from "react";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg, showSuccessMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";

// redux
import { useSelector, useDispatch } from "react-redux";
import { clearMessages } from "../redux/actionts/messageActions";
import { createCategory } from "../redux/actionts/categoryActions";

const AdminCategoryModal = () => {
  const dispatch = useDispatch();

  //redux global state properties
  const { successMsg, errorMsg } = useSelector((state) => state.messages);
  const { loading } = useSelector((state) => state.loading);

  // component state properties
  const [category, setCategory] = useState("");
  const [clientSideErorrMsg, setclientSideErorrMsg] = useState("");

  /** =========== event handlers ================*/
  const handleMessages = (event) => {
    dispatch(clearMessages());
  };

  const handleCategoryChange = (event) => {
    dispatch(clearMessages());
    setclientSideErorrMsg("");
    setCategory(event.target.value);
  };

  const handleCategorySubmit = (event) => {
    event.preventDefault();

    if (isEmpty(category)) {
      setclientSideErorrMsg("Please enter a category");
    } else {
      const data = { category };
      dispatch(createCategory(data));
      setCategory("");
    }
  };
  return (
    <div id="addCategoryModal" className="modal" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form onSubmit={handleCategorySubmit}>
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Add Category</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body my-2">
              {clientSideErorrMsg && showErrorMsg(clientSideErorrMsg)}
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
};

export default AdminCategoryModal;
