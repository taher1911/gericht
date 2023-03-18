import React from "react";

import Container from "../../../ui/container/Container";
import SectionTitle from "../../../ui/section-title/SectionTitle";

import Image from "../../../assets/believe-image.png";
import descriptionImage from "../../../assets/description-image.svg";
import KevinLuo from "../../../assets/Kevin-Luo-sign.png";
import "./Believe.css";
const Believe = () => {
  return (
    <section className="home__believe">
      <Container>
        <div className="content">
          <div className="image">
            <img src={Image} alt="believe in " />
          </div>
          <div className="text">
            <SectionTitle title={`Chef’s Word`} subTitle="What we believe in" />
            <p className="description">
              <span>
                <img src={descriptionImage} alt="description" />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
              .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
              sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
              molestie lectus eu. Congue iaculis integer curabitur semper sit
              nunc.
            </p>
            <div className="about">
              <h4 className="name">Kevin Luo </h4>
              <p className="job">Chef & Founder</p>
              <img src={KevinLuo} alt="Kevin Luo" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Believe;
