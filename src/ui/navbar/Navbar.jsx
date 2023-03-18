import React, { useEffect, useState } from "react";

import { MobileNav } from "./MobileNav";

import { Link, useLocation } from "react-router-dom";

import { BiSearch } from "react-icons/bi";
import Logo from "../../assets/logo.svg";

import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  const showMobileNavHandler = () => {
    setShow((prev) => !prev);
  };

  // navbar show and hidden functionality
  var prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > window.innerHeight) {
      document.getElementById("top").style.right = "30px";
    } else {
      document.getElementById("top").style.right = "-35px";
    }
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav-scroll").style.position = "fixed";
      document.getElementById("nav-scroll").style.background = "#000";
      document.getElementById("nav-scroll").style.top = "0px";
      if (currentScrollPos < 100) {
        if (pathname !== "/") {
          document.getElementById("nav-scroll").style.background = "#000";
        } else {
          document.getElementById("nav-scroll").style.background =
            "transparent";
        }
      }
    } else {
      document.getElementById("nav-scroll").style.position = "absolute";
      document.getElementById("nav-scroll").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  };

  //navbar background color
  useEffect(() => {
    if (pathname !== "/") {
      document.getElementById("nav-scroll").style.background = "#000";
    } else {
      document.getElementById("nav-scroll").style.background = "transparent";
    }
  }, [pathname]);

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return (
    <nav className="navbar" id="nav-scroll">
      <div className="nav__logo">
        <Link to="/">
          {" "}
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <ul className="nav__links">
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
      </ul>
      <div className="nav__search__container">
        <form className="nav__search">
          <input type="text" name="search" placeholder="Search website" />
          <button type="submit">
            <BiSearch />
          </button>
        </form>
        <button
          className="navbar-toggler custom-toggler ham-toggle"
          type="button"
          onClick={showMobileNavHandler}
        >
          <span className="menu-btn" id="menu-btn">
            <span className="line one"></span>
            <span className="line two"></span>
            <span className="line three"></span>
          </span>
        </button>
      </div>
      {show && <MobileNav showHandler={showMobileNavHandler} />}
    </nav>
  );
};

export default Navbar;
