import React from "react";

import { motion } from "framer-motion";
import "./Button.css";
const Button = (props) => {
  return (
    <motion.a
      href={props.href}
      className={`${props.reverse ? "main__button reverse" : "main__button"}`}
      whileHover={{
        color: props.reverse ? "#000" : "var(--main-color)",
      }}
    >
      {props.text}
    </motion.a>
  );
};

export default Button;
