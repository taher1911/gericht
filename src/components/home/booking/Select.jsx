import React, { useState } from "react";

import { BsCaretDownFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

import "./Select.css";
export default function SelectComponent(props) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`select ${active ? "active" : ""}`}
      onClick={() => {
        setActive((prev) => !prev);
      }}
    >
      <div className="value">
        <span className="val">{props.value}</span>
        <span className="arrow">
          <BsCaretDownFill />
        </span>
      </div>
      <AnimatePresence>
        {active && (
          <motion.ul
            className="values"
            initial={{ opacity: 0, y: "-10px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
            }}
            exit={{ opacity: 0, y: "10px" }}
          >
            {props.options.map((option, i) => {
              return (
                <li key={i} className={option} onClick={props.handler}>
                  {option}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
