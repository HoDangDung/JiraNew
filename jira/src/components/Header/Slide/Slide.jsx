import { React, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Slide.module.css";
import cn from "classnames";

const Slide = ({ transition }) => {
  const move = transition ? { width: "178px" } : {};
  return (
    <>
      <header>
        <div id="mySidenav" className={styles.sidenav} style={move}>
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
    </>
  );
};

export default Slide;
