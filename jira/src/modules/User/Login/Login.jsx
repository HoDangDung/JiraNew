import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Login.module.css";
import cn from "classnames";

const Login = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "",
      passWord: "",
    },
  });
  const { errors } = formState;
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="row" style={{ height: "100vh", width: "100%" }}>
      <div className={cn("col-sm-6")}></div>
      <div className="col-sm-6 d-flex justify-content-center align-items-center">
        <div className="w-50">
          <h3 className="text-center">Login cyberbugs</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                {...register("email", { require: true })}
                type="email"
                className="form-control"
                placeholder="Email"
                />
              {errors.email && <p>Tài khoản không được để trống</p>}
            </div>
            <div className="form-group py-3">
              <input
                {...register("passWord", { require: true })}
                type="password"
                className="form-control"
                placeholder="Password"
              />
              {errors.passWord && <p>Mật khẩu không được để trống</p>}
            </div>
            <div className="form-group text-center">
              <button className="btn btn-primary form-control">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
