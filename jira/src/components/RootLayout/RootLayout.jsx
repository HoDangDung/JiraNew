import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Slide from "../Header/Slide/Slide";
import Navbar from "../Header/Navbar/Navbar";

const RootLayout = () => {
  const [open, setOpen] = useState(false);
  const padding = open
    ? { paddingLeft: "178px", transition: "0.5s" }
    : { transition: "0.5s" };
  const transition = () => {
    setOpen(!open);
  };

  return (
    <>
      <Slide transition={open} />
      <div className="row w-100" style={padding}>
        <div className="col-lg-3 col-sm-4">
          <Navbar transition={transition} />
        </div>
        <div className="col-lg-8 col-sm-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
