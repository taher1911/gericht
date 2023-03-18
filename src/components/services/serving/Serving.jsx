import React from "react";

import Container from "../../../ui/container/Container";
import SectionTitle from "../../../ui/section-title/SectionTitle";
import Button from "../../../ui/button/Button";

import "./Serving.css";
const Serving = () => {
  return (
    <section className="services__serving">
      <Container>
        <SectionTitle
          title="serving quality"
          subTitle="We At Gericth Are Serving Our Customers For Over A Decade.
"
        />
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <div className="btns">
          <Button text="read more" href="/services" />
          <Button text="contact us" href="/contact-us" reverse="true" />
        </div>
      </Container>
    </section>
  );
};

export default Serving;
