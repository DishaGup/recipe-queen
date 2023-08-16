import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcCheckmark, FcCancel } from "react-icons/fc";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUserRequest } from "../Redux/action";

const initialState = {
  name: "",
  password: "",
  email: "",
  confirmpassword: "",
};

const RegisterPage = () => {
  const [formData, setData] = useState(initialState);
  const [showpass1, setShowpass1] = useState(false);
  const navigate = useNavigate();
 const dispatch =useDispatch()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const {loading,error,token} =useSelector((store)=>store.authReducer)
 //console.log(loading,error,token)

  const handleSubmit = (e) => {
    e.preventDefault();
  
  dispatch(registerUserRequest(formData))
    setData(initialState);
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Create New Account</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
          />

          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
          />

          <label className="form-label">Password</label>
          <div className="form-input">
            <input
              type={showpass1 ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Type Strong Password"
            />
            <button
              onClick={() => setShowpass1((prev) => !prev)}
              className="show-password-btn"
            >
              {showpass1 ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
          </div>

          <label className="form-label">Confirm Password</label>
          <div className="form-input">
            <input
              type="password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
            <button className="show-password-btn">
              {formData.password === formData.confirmpassword ? (
                <FcCheckmark />
              ) : (
                <FcCancel />
              )}
            </button>
          </div>

          <div className="form-btn">
            <button type="submit" className="register-submit-btn">
              Register
            </button>
          </div>

          <div className="link-text">
            Already have an account?{" "}
            <Link to="/login" className="link">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
