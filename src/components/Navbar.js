import React, { useState } from "react";
import { Link } from "gatsby";
import Whatsapp from "../img/icons8-whatsapp (1).svg";
import logo from "../img/Web.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Sambal Bajag Bejo" style={{ width: "170px" }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul
          id="navMenu"
          className={` navbar-start has-text-centered navbar-menu ${
            isActive && "is-active"
          }`}
        >
          {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/products">
              Products
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </li>
          {/* <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
          </li> */}
          <li className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://wa.me/+6288293399794?text=halo saya tertarik dengan produk sambal bajag anda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={Whatsapp} alt="Github"/>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
