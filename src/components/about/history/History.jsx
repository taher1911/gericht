import React, { useState } from "react";

import Container from "../../../ui/container/Container";
import SectionTitle from "../../../ui/section-title/SectionTitle";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import image1 from "../../../assets/history-1.png";
import image2 from "../../../assets/history-2.png";
import image3 from "../../../assets/header-sub-img.svg";
import line from "../../../assets/line.svg";
import "./History.css";
const History = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <section className="about__history__section">
      <Container>
        <SectionTitle
          title="our history"
          subTitle="Serving Customers For Over A Decade"
        />
        <div className="history__content">
          <div className="history__content__child history__content__child1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
            <img src={image1} alt="trattoria" className="image" />
          </div>
          <div className="history__content__child history__content__child2">
            <img src={image2} alt="table" className="image" />
            <h3>Over The Years</h3>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div className="numbers">
                <div className="number">
                  <h4>
                    {counterOn && (
                      <CountUp start={0} end={30} duration={3} delay={0} />
                    )}
                    +
                  </h4>
                  <img src={image3} alt="underline" />
                  <p>
                    Breakfast
                    <br className="clear__breakline" /> Options
                  </p>
                </div>
                <div className="line">
                  <img src={line} alt="line" />
                </div>
                <div className="number">
                  <h4>
                    {counterOn && (
                      <CountUp start={0} end={50} duration={3} delay={0} />
                    )}
                    +
                  </h4>
                  <img src={image3} alt="underline" />
                  <p>
                    Dinner
                    <br className="clear__breakline" /> Options
                  </p>
                </div>
                <div className="line">
                  <img src={line} alt="line" />
                </div>
                <div className="number">
                  <h4>
                    {counterOn && (
                      <CountUp start={0} end={8} duration={3} delay={0} />
                    )}
                    +
                  </h4>
                  <img src={image3} alt="underline" />
                  <p>
                    New
                    <br className="clear__breakline" /> Locations
                  </p>
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default History;
