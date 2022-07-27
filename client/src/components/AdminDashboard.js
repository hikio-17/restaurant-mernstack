import React from "react";

const AdminDashboard = () => {
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
    <div id="addCategoryModal" className="modal">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-info text-white">
            <h5 className="modal-title">Add Category</h5>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body my-2">
            <form>
              <label className="text-secondary">Category</label>
              <input type="text" className="form-control" />
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dissmis="modal">
              Close
            </button>
            <button className="btn btn-info">Submit</button>
          </div>
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
