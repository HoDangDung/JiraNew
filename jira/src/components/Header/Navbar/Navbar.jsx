import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { logout } from "../../../slices/authSlice";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = ({ transition }) => {
  const handleLogout = () => {
    console.log(logout);
  };

  console.log(transition);
  return (
    <div>
      <div className={styles.menu}>
        <div className="project">
          <div className="row">
            <div className="col-sm-6">
              <button className="btn btn-danger" onClick={() => handleLogout()}>
                Logout
              </button>
            </div>
            <div className="col-sm-6 d-flex justify-content-end align-items-center">
              <AiOutlineUnorderedList
                onClick={() => transition()}
                style={{ fontSize: "20", cursor: "pointer" }}
              />
            </div>
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
              <Link to="/project">
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
    </div>
  );
};

export default Navbar;
