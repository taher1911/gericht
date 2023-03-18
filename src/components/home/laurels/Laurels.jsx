import React from "react";

import Container from "../../../ui/container/Container";
import SectionTitle from "../../../ui/section-title/SectionTitle";
import Laurel from "./Laurel";

import laurel1 from "../../../assets/laurel1.svg";
import laurel2 from "../../../assets/laurel2.svg";
import laurel3 from "../../../assets/laurel3.svg";
import laurel4 from "../../../assets/laurel4.svg";
import LauralsImage from "../../../assets/laurels.png";
import "./Laurels.css";

const LaurelsDATA = [
  {
    id: 1,
    image: laurel1,
    title: "Bib Gourmond",
    description: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    id: 2,
    image: laurel2,
    title: "Rising Star",
    description: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    id: 3,
    image: laurel3,
    title: "AA Hospitality",
    description: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    id: 4,
    image: laurel4,
    title: "Outstanding Chef",
    description: "Lorem ipsum dolor sit amet, consectetur.",
  },
];
const Laurels = () => {
  return (
    <section className="home__laurels">
      <Container>
        <div className="content">
          <div className="text">
            <SectionTitle title="Awards & recognition" subTitle="Our Laurels" />
            <div className="laurels">
              {LaurelsDATA.map((item) => (
                <Laurel
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
          <div className="laurel__image">
            <img src={LauralsImage} alt="laurels" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Laurels;
