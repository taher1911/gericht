import React from "react";

import Container from "../../../ui/container/Container";
import SectionTitle from "../../../ui/section-title/SectionTitle";
import Slider from "./Slider";
import Button from "../../../ui/button/Button";

import "./Gallery.css";
const Gallery = () => {
  return (
    <section className="home__gallery">
      <Container>
        <div className="content">
          <div className="text">
            <SectionTitle title="instagram" subTitle="photo gallery" />
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              mattis ipsum turpis elit elit scelerisque egestas mu.
            </p>
            <Button href="/" text="view more" />
          </div>
          <div className="slider">
            <Slider />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
