import React, { useEffect, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { menuheadings } from "./FooterSec";

const Navbar = () => {
  const navbar = useRef(null);
  const navTogglers = useRef(null);
  const navbarLinks = useRef(null);
  const overlay = useRef(null);
  const header = useRef(null);
  const location = useLocation();

  
  useEffect(() => {
    if (location.pathname !== "/") {
      header.current.classList.add("active");
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
    <header className="header" ref={header}>
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
              <li key={index} className="navbar-item">
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
          </ul>
        </nav>

        <div className="header-action">
          <Link to="/login">
            <button className="cart-btn" aria-label="cart">
              <BiLogIn
                color={"#00000"}
                height="250px"
                width="250px"
                aria-hidden="true"
              />
            </button>
          </Link>
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
    </header>
  );
};

export default Navbar;
