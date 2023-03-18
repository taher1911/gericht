import React, { useState } from "react";

import { BsPlayCircle } from "react-icons/bs";
import "./Video.css";
const Video = () => {
  const [play, setPlay] = useState(false);
  return (
    <div className="video__container">
      <div
        className={`video__bg ${play ? "hide" : ""}`}
        onClick={() => setPlay(true)}
      >
        <BsPlayCircle />
      </div>

      <div className="video">
        <iframe
          src="https://www.youtube.com/embed/dA0VGEbbw4g"
          title="Food Film | Cinematic Burger"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
