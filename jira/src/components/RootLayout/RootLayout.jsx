import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const RootLayout = () => {
  return (
    <div className="row w-100">
      <div className="col-lg-3 col-sm-4">
        <Header />
      </div>
      <div className="col-lg-8 col-sm-6">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
