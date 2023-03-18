import React, { useState } from "react";

import { Link } from "react-router-dom";

import barMenuImage from "../../../assets/bar-menu.jpg";
import foodMenuImage from "../../../assets/food-menu.png";
import dessertMenuImage from "../../../assets/dessert-menu.png";

import { motion, AnimatePresence } from "framer-motion";

import "./Menus.css";
const Menus = () => {
  const [whoActive, setWhoActive] = useState(1);
  const handler = (num) => {
    setWhoActive(num);
  };
  return (
    <section className="home__menus">
      <div className="buttons">
        <div className={`btn ${whoActive === 1 ? "active" : ""}`}>
          <Link to="/" onMouseEnter={handler.bind(null, 1)}>
            bar menu
          </Link>
        </div>
        <div className={`btn ${whoActive === 2 ? "active" : ""}`}>
          <Link to="/" onMouseEnter={handler.bind(null, 2)}>
            food menu
          </Link>
        </div>
        <div className={`btn ${whoActive === 3 ? "active" : ""}`}>
          <Link to="/" onMouseEnter={handler.bind(null, 3)}>
            dessert menu
          </Link>
        </div>
      </div>
      <div className="background">
        <AnimatePresence>
          {whoActive === 1 && (
            <motion.img
              src={barMenuImage}
              alt="bar menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {" "}
          {whoActive === 2 && (
            <motion.img
              src={foodMenuImage}
              alt="food menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {whoActive === 3 && (
            <motion.img
              src={dessertMenuImage}
              alt="dessert menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menus;
