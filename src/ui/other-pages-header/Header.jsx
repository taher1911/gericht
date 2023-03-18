import React from "react";
import { Link } from "react-router-dom";

import { FaChevronRight } from "react-icons/fa";

import "./Header.css";
const PagesHeader = ({ pageTitle }) => {
  return (
    <header className="pages__header">
      <div className="content">
        <h2 className="pages__header-title">{pageTitle}</h2>
        <p className="pages__header-link">
          <Link to="/">Home</Link>
          <span className="pages__header-link-right">
            <FaChevronRight />
          </span>
          <span>{pageTitle}</span>
        </p>
      </div>
    </header>
  );
};

export default PagesHeader;
