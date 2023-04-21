import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../../slices/authSlice";
import cn from "classnames";
import { Navigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.authSlice);
  console.log(error);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      passWord: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    console.log(values);
    dispatch(signin(values));
  };

  if (user) {
    return <Navigate to="/project" replace />;
  }

  return (
    <div className="row" style={{ height: "100vh", width: "100%" }}>
      <div className={cn("col-sm-6")}></div>
      <div className="col-sm-6 d-flex justify-content-center align-items-center">
        <div className="w-50">
          <h3 className="text-center">Login cyberbugs</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
                {...register("email")}
              />
            </div>
            <div className="form-group py-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                {...register("passWord", { require: true })}
                required
              />
            </div>
            <div className="form-group text-center">
              <button
                disabled={loading}
                className="btn btn-primary form-control"
              >
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
