import React from "react";
import styles from "./Login.module.css";
import cn from "classnames";

const Login = () => {
  return (
    <div className="row" style={{ height: "100vh", width: "100%" }}>
      <div className={cn("col-sm-6", styles.bg)}></div>
      <div className="col-sm-6 d-flex justify-content-center align-items-center">
        <div className="w-50">
          <h3 className="text-center">Login cyberbugs</h3>
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div className="form-group py-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-primary form-control">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
