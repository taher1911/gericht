import React from "react";

import knife from "../../../assets/knife.png";
import titleImage from "../../../assets/header-sub-img.svg";

import Container from "../../../ui/container/Container";
import Button from "../../../ui/button/Button";

import "./About.css";
const About = () => {
  return (
    <section className="home__about__section">
      <Container>
        <div className="content">
          <div className="about text">
            <div className="title">
              <h2 className="sub__title">About Us</h2>
              <img src={titleImage} alt="title" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
            <Button href="/about" text="Know More" />
          </div>
          <div className="img">
            <img src={knife} alt="knife" />
          </div>
          <div className="history text">
            <div className="title">
              <h2 className="sub__title">Our History</h2>
              <img src={titleImage} alt="title" />
            </div>
            <p>
              Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
              Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
              odio nec aliquet.
            </p>
            <Button href="/about" text="Know More" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
