import React from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

import Logo from "../../assets/logo.svg";

import "./MobileNav.css";
const Mobile = (props) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="mobile__nav__container"
        initial={{
          opacity: 0,
          y: "-100vh",
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: "-100vh",
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <div className="head">
          <div className="nav__logo">
            <Link to="/">
              {" "}
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <button
            type="button"
            className="mobile__nav__btn"
            onClick={props.showHandler}
          >
            x
          </button>
        </div>
        <div className="body">
          <ul className="mobile__nav__links">
            <li onClick={props.showHandler}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={props.showHandler}>
              <Link to="/about">About Us</Link>
            </li>
            <li onClick={props.showHandler}>
              <Link to="/contact-us">Contact us</Link>
            </li>
            <li onClick={props.showHandler}>
              <Link to="/services">Services</Link>
            </li>
            <li onClick={props.showHandler}>
              <Link to="/team">Team</Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export const MobileNav = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Mobile showHandler={props.showHandler} />,
        document.getElementById("mobile-nav")
      )}
    </React.Fragment>
  );
};
