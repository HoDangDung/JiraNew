import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import userAPI from "../../../services/userAPI";
import projectAPI from "../../../services/projectAPI";

const Assign = ({ open, handleToggle, projectId }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: 0,
      projectId: projectId,
    },
  });
  const [user, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await userAPI.getUser();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onSubmit = async (data) => {
    try {
      if (data) {
        console.log({ ...data, projectId });
        await projectAPI.createAssign({ ...data, projectId });
        alert("Add Members successfully");
      }
    } catch (error) {
      alert(error);
    }
  };

  if (!open) {
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
          <form
            className="modal-content w-75"
            {...register("projectId")}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="modal-header">
              <h5 className="modal-title">Add user</h5>
              <button
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleToggle}
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <select className="form-control" {...register("userId")}>
                  {user.map((item) => (
                    <option value={item.userId} key={item.userId}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={handleToggle}
              >
                Close
              </button>
              <button className="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
      {/* Overlay */}
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default Assign;
