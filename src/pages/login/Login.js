import "./Login.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "../../Utils";
import logo from "./../../assets/img/logo.png";

const Login = () => {
  return (
    <Profiler id="Login" onRender={profilerCallback}>
      <div className="login">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <form className="form">
          <div className="row">
            <i className="icon icon-tag-white"></i>
            <input type="text" placeholder="نام دیتاکی" />
          </div>
          <div className="row">
            <i className="icon icon-tag-white"></i>
            <input type="text" placeholder="رمز عبور" />
          </div>
          <div className="row">
            <button type="button" className="btn-login">
              ورود
            </button>
          </div>
        </form>
      </div>
    </Profiler>
  );
};

export default Login;
