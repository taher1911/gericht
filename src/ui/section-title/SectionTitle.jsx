import React from "react";

import SubImage from "../../assets/header-sub-img.svg";
import "./SectionTitle.css";
const SectionTitle = ({ title, subTitle }) => {
  return (
    <React.Fragment>
      <div className="title">
        <p>{title}</p>
        <img src={SubImage} alt="sub title" />
      </div>
      <h2 className="sub__title">{subTitle}</h2>
    </React.Fragment>
  );
};

export default SectionTitle;
