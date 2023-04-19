import React, { Component, useEffect, useState } from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import projectAPI from "../../services/projectAPI";
import styles from "./Project.module.css";
import UpdateProject from "./UpdateProject/UpdateProject";

const Project = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await projectAPI.getAllProject();
        setProject(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {console.log(project)}
      <div className={cn(styles.container, "container py-5")}>
        <h3>Project management</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>projectName</th>
              <th>category</th>
              <th>creator</th>
              <th>members</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {project.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.projectName}</td>
                <td>{item.categoryName}</td>
                <td>
                  <span key={item.creator.id}>{item.creator.name}</span>
                </td>
                <td>
                  {item.members.map((member) => (
                    <button
                      key={member.userId}
                      type="button"
                      className="btn btn-outline-info me-2 text-dark rounded-circle"
                    >
                      {member.name}
                    </button>
                  ))}
                  <button className="btn btn-outline-info me-2 text-dark rounded-circle">
                    +
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => setIsOpen(true)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UpdateProject isOpen={isOpen} onClose={isOpen} />
    </>
  );
};

export default Project;
