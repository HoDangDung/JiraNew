import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const RootLayout = () => {
  return (
    <div className="row">
      <div className="col-sm-3">
        <Header />
      </div>
      <div className="col-sm-7">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
