import React from "react";

import ReactDOM from "react-dom";

import loaderImage from "../../assets/loader.gif";

import "./Loading.css";
const LoadingFunc = () => {
  return (
    <div className="loading__container">
      <img src={loaderImage} alt="loading..." />
    </div>
  );
};
const Loading = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <LoadingFunc />,
        document.getElementById("loader")
      )}
    </React.Fragment>
  );
};

export default Loading;
