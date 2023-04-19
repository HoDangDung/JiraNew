import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBoolean } from "usehooks-ts";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import projectAPI from "../../services/projectAPI";
import UpdateProject from "./UpdateProject/UpdateProject";
import cn from "classnames";
import styles from "./Project.module.css";

const Project = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState([]);
  const [members, setMembers] = useState([]);
  const { value, setTrue, setFalse } = useBoolean(false);

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

  const handleSelect = (member) => {
    setMembers(member);
    setTrue();
  };

  return (
    <>
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
                  <button
                    className="btn btn-outline-warning"
                    key={item.creator.id}
                  >
                    {item.creator.name}
                  </button>
                </td>
                <td>
                  {item.members.map((member) => (
                    <button
                      key={member.userId}
                      type="button"
                      className="btn btn-outline-info me-2 text-dark"
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
                    onClick={() => handleSelect(item)}
                  >
                    <BiEdit />
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger">
                    <BsTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UpdateProject onClose={setFalse} value={value} member={members} />
    </>
  );
};

export default Project;
