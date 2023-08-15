import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";
import { render } from "react-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <Link href="#" className="logo">
          <img
             src="/logo.png"
            width="148"
            height="38"
            alt="recipequeen home"
          />
        </Link>

        <nav className="navbar">
          <button className="nav-close-btn" aria-label="close menu">
            <AiOutlineClose color={"#00000"} height="250px" width="250px" />
          </button>

          <Link href="#" className="logo">
            <img
               src="/logo.png"
              width="148"
              height="38"
              alt="recipequeen home"
            />
          </Link>

          <ul className="navbar-list">
            <li className="navbar-item">
              <Link href="#" className="navbar-link">
                Home
              </Link>
            </li>

            <li className="navbar-item">
              <Link href="#" className="navbar-link">
                About Us
              </Link>
            </li>

            <li className="navbar-item">
              <Link href="#" className="navbar-link">
                Restaurants
              </Link>
            </li>

            <li className="navbar-item">
              <Link href="#" className="navbar-link">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-action">
          <button className="cart-btn" aria-label="cart">
            <BsFillHandbagFill
              color={"#00000"}
             
              height="250px"
              width="250px"
              aria-hidden="true"
            />
          </button>

          <Link href="#" className="btn btn-primary has-after">
            Order Now
          </Link>
        </div>

        <button className="nav-open-btn" aria-label="open menu">
        <FiMenu
  color={'#00000'} 
  height="250px"
  width="250px"
  aria-hidden="true"
/> 
        </button>

        <div className="overlay"></div>
      </div>
    </header>
  );
};

export default Navbar;
