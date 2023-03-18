import React from "react";

import descriptionImage from "../../../assets/description-image.svg";
import "./Customer.css";
const Customer = ({ comment, name, job, image }) => {
  return (
    <div className="customer">
      <div className="image">
        <img src={image} alt={name} className="customer-image " />
        <img src={descriptionImage} alt="text" className="desc" />
      </div>
      <div className="text">
        <p className="comment">{comment}</p>
        <p className="name">{name}</p>
        <p className="job">{job}</p>
      </div>
    </div>
  );
};

export default Customer;
