import React, { useEffect, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { menuheadings } from "./FooterSec";
import { useDispatch, useSelector } from "react-redux";
import { USER_LOGOUT_SUCCESS } from "../Redux/actionType";
import {Box} from '@chakra-ui/react'
const Navbar = () => {
  const navbar = useRef(null);
  const navTogglers = useRef(null);
  const navbarLinks = useRef(null);
  const overlay = useRef(null);
  const header = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.authReducer);
  // console.log(token)
  useEffect(() => {
    if (location.pathname !== "/" || location.pathname == "/bookmarked-data") {
      header.current.classList.add("border");
    }
  }, []);

  const toggleNavbar = () => {
    navbar.current.classList.toggle("active");
    overlay.current.classList.toggle("active");
    document.body.classList.toggle("active");
  };

  const closeNavbar = () => {
    navbar.current.classList.remove("active");
    overlay.current.classList.remove("active");
    document.body.classList.remove("active");
  };

  const headerActive = () => {
    if (window.scrollY > 200) {
      header.current.classList.add("active");
      header.current.classList.remove("border");
    } else {
      header.current.classList.remove("active");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerActive);

    return () => {
      window.removeEventListener("scroll", headerActive);
    };
  }, []);

  return (
    <Box
      as="header"
      className="header"
      ref={header}
      pos={location.pathname === "/" ? "absolute" : "fixed"}
   //   pos = "absolute"
      top="0"
      left="0"
      w="100%"
      zIndex="4"
      bg={location.pathname === "/" ? "transparent" : "white"}
      boxShadow={location.pathname === "/" ? "none" : "var(--shadow-2)"}
      transition="background-color 0.3s ease"
      mb={location.pathname === "/" ? 0 : "64px"}
    >
      <div className="container">
        <Link to="/" className="logo">
          <img src="/logo.png" width="148" height="38" alt="recipequeen home" />
        </Link>

        <nav className="navbar" ref={navbar}>
          <button
            className="nav-close-btn"
            aria-label="close menu"
            onClick={closeNavbar}
          >
            <AiOutlineClose color={"#00000"} height="250px" width="250px" />
          </button>

          <Link to="/" className="logo">
            <img
              src="/logo.png"
              width="148"
              height="38"
              alt="recipequeen home"
            />
          </Link>

          <ul className="navbar-list">
            {menuheadings.map((el, index) => (
              <li className="navbar-item" key={index}>
                <Link
                  to="#"
                  className="navbar-link"
                  onClick={closeNavbar}
                  ref={navbarLinks}
                >
                  {el}
                </Link>
              </li>
            ))}
            {token != "" && (
              <Link
                to="/bookmarked-data"
                className="navbar-link"
                onClick={closeNavbar}
                ref={navbarLinks}
              >
                Bookmark Data
              </Link>
            )}
          </ul>
        </nav>

        <div className="header-action">
          <button className="cart-btn" aria-label="cart">
            {token == "" ? (
              <Link to="/login">
                <BiLogIn
                  color={"#00000"}
                  height="250px"
                  width="250px"
                  aria-hidden="true"
                />{" "}
              </Link>
            ) : (
              <BiLogOut
                color={"#00000"}
                height="250px"
                width="250px"
                aria-hidden="true"
                onClick={() => dispatch({ type: USER_LOGOUT_SUCCESS })}
              />
            )}
          </button>

          <Link to="/all-recipe" className="btn btn-primary has-after">
            All Recipes
          </Link>
        </div>

        <button
          className="nav-open-btn"
          aria-label="open menu"
          ref={navTogglers}
          onClick={toggleNavbar}
        >
          <FiMenu
            color={"#00000"}
            height="250px"
            width="250px"
            aria-hidden="true"
          />
        </button>

        <div className="overlay" ref={overlay}></div>
      </div>
</Box>
  );
};

export default Navbar;
