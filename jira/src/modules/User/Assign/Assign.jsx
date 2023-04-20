import React, { useEffect, useState } from "react";
import ErrorBoundary from "../../../components/ErrorBoundary/ErrorBoundary";
import userAPI from "../../../services/userAPI";

const Assign = ({ value, onChange }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await userAPI.getUser();
        setUser(data);
      } catch (error) {
        <ErrorBoundary />;
      }
    })();
  }, []);

  console.log(user);
    if (!value) {
      return null;
    }
  return (
    <>
      <div
        className="modal fade show d-block"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog d-flex justify-content-center"
          role="document"
        >
          <div className="modal-content w-75">
            <div className="modal-header">
              <h5 className="modal-title">Add user</h5>
              <button
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <select className="form-control">
                  <option></option>
                  <option></option>
                  <option></option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Overlay */}
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default Assign;
