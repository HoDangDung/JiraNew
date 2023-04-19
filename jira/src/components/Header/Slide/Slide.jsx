import { React, useEffect, useState } from "react";
import styles from "./Slide.module.css";
import { Link } from "react-router-dom";

const Slide = () => {
  const [width, setWidth] = useState();

  const openNav = useEffect(() => {
    const element = document.getElementById("mySidenav");
    element.style.width = "178px";
  }, []);

  const closeNav = useEffect(() => {
    const element = document.getElementById("mySidenav");
    element.style.width = "0";
  }, []);

  return (
    <>
      <header>
        <div id="mySidenav" className={styles.sidenav}>
          <a
            href="javascript:void(0)"
            className="closebtn"
            onclick={() => closeNav()}
          >
            <i className="fa-solid fa-list" />
          </a>
          <a href="#">Create task</a>
          <a href="#">Search</a>
        </div>
      </header>

      <div className={styles.menu}>
        <div className="project">
          <div
            style={{ fontSize: "30", cursor: "pointer", textAlign:"end"}}
            onclick={() => openNav()}
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
          <div className="listProject">
            <div className="item">
              <Link to="/">
                <i className="fa-solid fa-gear" />
                Project Management
              </Link>
            </div>
            <div className="item">
              <Link to="/createProject">
                <i className="fa-solid fa-gear" />
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
