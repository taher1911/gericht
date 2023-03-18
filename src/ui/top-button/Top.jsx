import React from "react";
import reactDOM from "react-dom";

import { motion, AnimatePresence } from "framer-motion";
import "./Top.css";
const TopComponent = () => {
  const clickHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <AnimatePresence>
      <motion.button
        className="top__component"
        onClick={clickHandler}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.9,
        }}
      >
        <span></span>
        top
      </motion.button>
    </AnimatePresence>
  );
};

export const Top = () => {
  return (
    <React.Fragment>
      {reactDOM.createPortal(<TopComponent />, document.getElementById("top"))}
    </React.Fragment>
  );
};
