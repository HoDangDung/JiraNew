import { React } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import styles from "./Slide.module.css";
import cn from "classnames"

const Slide = ({ transition }) => {
  const move = transition ? { width: "178px" } : {};
  return (
    <>
      <div className={cn(styles.sidenav, "py-5")} style={move}>
        <ul>
          <li>
            <Link to="/createTask">
              <AiOutlinePlus />
              <span>Create task</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <AiOutlineSearch />
              <span>Search</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Slide;
