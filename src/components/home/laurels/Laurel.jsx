import React from "react";

import "./Laurel.css";
const laurel = ({ image, title, description }) => {
  return (
    <div className="laurel">
      <div className="image">
        <img src={image} alt="laurel" />
      </div>
      <div className="text">
        <h4 className="title">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default laurel;
