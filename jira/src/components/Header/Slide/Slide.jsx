import { React } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import styles from "./Slide.module.css";
import cn from "classnames";
import { logout } from "../../../slices/authSlice";

const Slide = () => {
  const handleOpen = () => {};
  const handleLogout = () => {
    console.log(logout);
    return logout;
  };
  return (
    <>
      <header>
        <div id="mySidenav" className={styles.sidenav}>
          <div className="pe-4" style={{ textAlign: "end" }}>
            <AiOutlineUnorderedList
              style={{ fontSize: "30", cursor: "pointer", color: "white" }}
            />
          </div>
          <ul>
            <li>
              <Link to="/createTask">Create task</Link>
            </li>
            <li>
              <Link href="#">Search</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className={styles.menu}>
        <div className="project">
          <div>
            <button className="btn btn-danger" onClick={() => handleLogout()}>
              Logout
            </button>
          </div>
          <div
            style={{ fontSize: "30", cursor: "pointer", textAlign: "end" }}
            onClick={() => handleOpen()}
          >
            ☰
          </div>
          <div className={styles.logo}>
            <img src="" alt="logo" />
            <span className="heading">
              <h5>Cyberlearn.vn</h5>
              Reaport bug
            </span>
          </div>
          <div className={styles.listProject}>
            <div className="item py-3">
              <Link to="/">
                <IoSettingsSharp />
                Project Management
              </Link>
            </div>
            <div className="item">
              <Link to="/createProject">
                <IoSettingsSharp />
                Create Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;
