import React from "react";

const ManageAds = () => {
  return (
    <div className="card my-5 container">
      <h5 className="card-header">Manage Ads</h5>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Ad</th>
              <th>ID</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
            {[...Array(10)].map((_, i) => (
              <tr key={i}>
                <td>
                  <p>Samsung Galaxy S9</p>
                </td>
                <td>#12345678910</td>
                <td>
                  <span className="badge bg-primary me-1">Active</span>
                </td>
                <td>
                  <div>
                    <button
                      type="button"
                      className="me-2 btn btn-sm btn-primary"
                    >
                      Edit
                    </button>
                    <button type="button" className="btn btn-sm btn-danger">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAds;
