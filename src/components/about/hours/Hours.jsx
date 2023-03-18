import React from "react";

import Container from "../../../ui/container/Container";
import SectionTitle from "../../../ui/section-title/SectionTitle";
import Video from "./Video";
import "./Hours.css";
const Hours = () => {
  return (
    <section className="about__hours__section">
      <Container>
        <SectionTitle title="about us" subTitle="happy hours with us" />
        <p className="about__hours__section-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et
        </p>
        <Video />
      </Container>
    </section>
  );
};

export default Hours;
