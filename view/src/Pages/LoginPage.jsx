import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate, Link, useLocation } from "react-router-dom";
import { loginUserRequest } from "../Redux/action";

const initial = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [showpass1, setShowpass1] = useState(false);
  const [formData, setFormData] = useState(initial);
  
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const {loading,error,token} =useSelector((store)=>store.authReducer)
  //console.log(loading,error,token)
 
  const handleSubmit =(e) => {
    e.preventDefault();
//console.log(formData)
dispatch(loginUserRequest(formData))
    // try {
    //   await dispatch(loginUserRequest(formData));
    //   if (res && res.data && res.data.message === "Login Successful") {
    //     toast({
    //       title: "Login Successful",
    //       description: `Welcome ${res.data.message}`,
    //       position: "top",
    //       status: "success",
    //       variant: "top-accent",
    //       duration: 2000,
    //       isClosable: true,
    //     });
    //     navigate("/");
    //   } else {
    //     toast({
    //       title: "Wrong Credentials",
    //       position: "top-right",
    //       status: "error",
    //       variant: "top-accent",
    //       duration: 2000,
    //       isClosable: true,
    //     });
    //   }
    // } catch (err) {
    //   toast({
    //     title: "Server Error",
    //     position: "top-right",
    //     status: "error",
    //     variant: "top-accent",
    //     duration: 2000,
    //     isClosable: true,
    //   });
    // }
    setFormData(initial);
  };

  return (
    <div className="login-container">
    <div className="login-box">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {/* Form controls here */}
        <div className="form-control">
          <label className="form-label">
            <span>Email</span>
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
          />
        </div>
        {/* ... */}
        <div className="form-control">
          <label className="form-label">
            <span>Password</span>
          </label>
          <div className="form-input">
            <input
              name="password"
              placeholder="Type Password"
              value={formData.password}
              onChange={handleChange}
              type={showpass1 ? "text" : "password"}
            />
            <button onClick={() => setShowpass1((prev) => !prev)}>
              {showpass1 ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
          </div>
        </div>
        {/* ... */}
        <div className="form-btn">
          <button
            type="submit"
            className="btn-primary"
          >
            Login
          </button>
        </div>
        <div className="link-text">
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  </div>
  
  );
};


export default LoginPage