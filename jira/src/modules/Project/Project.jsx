import React, { useEffect, useState } from "react";
import { useBoolean } from "usehooks-ts";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import projectAPI from "../../services/projectAPI";
import UpdateProject from "./UpdateProject/UpdateProject";
import cn from "classnames";
import styles from "./Project.module.css";
import Assign from "../User/Assign/Assign";
import AddProject from "./AddProject/AddProject";

const Project = () => {
  const [project, setProject] = useState([]);
  const [members, setMembers] = useState([]);
  const [open, setOpen] = useState(false);
  const [assign, setAssign] = useState(0);
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

  const handleToggle = (projectId) => {
    setOpen(!open);
    setAssign(projectId);
  };

  const handleSelect = (member) => {
    setMembers(member);
    setTrue();
  };

  const getChar = (name) => {
    let result = [];
    result.push(name.charAt(0));
    for (let index = 0; index < name.length; index++) {
      if (name[index] === " ") {
        result.push(...name[index + 1]);
      }
    }
    return result.join("");
  };

  const charLimit = (content) => {
    if (content.length > 20) {
      return content.substring(0, 20) + "...";
    }
    return content;
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
                <td>{charLimit(item.projectName)}</td>
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
                      className="btn btn-info rounded-circle me-2 text-dark"
                    >
                      {getChar(member.name)}
                    </button>
                  ))}
                  <button
                    className="btn btn-outline-info me-2 text-dark rounded-circle"
                    onClick={() => handleToggle(item.id)}
                  >
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
      <Assign open={open} handleToggle={handleToggle} projectId={assign} />
      <UpdateProject onClose={setFalse} value={value} member={members} />
    </>
  );
};

export default Project;
