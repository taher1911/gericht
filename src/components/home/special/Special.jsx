import React from "react";

import Container from "../../../ui/container/Container";
import SectionTitle from "../../../ui/section-title/SectionTitle";
import Button from "../../../ui/button/Button";

import specialImage from "../../../assets/special-image.png";
import "./Special.css";
const WINE__DATA = [
  {
    id: 1,
    title: "Chapel Hill Shiraz",
    price: "56",
    description: "AU | Bottle",
  },
  {
    id: 2,
    title: "Catena Malbec",
    price: "59",
    description: "AR | Bottle",
  },
  {
    id: 3,
    title: "La Vieille Rosé",
    price: "44",
    description: "FR | 750 ml",
  },
  {
    id: 4,
    title: "Rhino Pale Ale",
    price: "31",
    description: "CA | 750 ml",
  },
  {
    id: 5,
    title: "Irish Guinness",
    price: "26",
    description: "IE | 750 ml",
  },
];
const COCKTAILS__DATA = [
  {
    id: 1,
    title: "Aperol Spritz",
    price: "20",
    description: "Aperol | Villa Marchesi prosecco | soda | 30ml",
  },
  {
    id: 2,
    title: "Dark 'N' Stormy",
    price: "16",
    description: "Dark rum | Ginger beer | Slice of lime.",
  },
  {
    id: 3,
    title: "Daiquiri",
    price: "10",
    description: "Rum | Citrus juice | Sugar",
  },
  {
    id: 4,
    title: "Old Fashioned",
    price: "31",
    description: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    id: 5,
    title: "Negroni",
    price: "26",
    description: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];
const Special = () => {
  return (
    <section className="home__special">
      <SectionTitle
        title="Menu that fits you palatte"
        subTitle="Today’s Special"
      />
      <Container>
        <div className="content">
          <div className="wine">
            <h3 className="title">Wine & Beer</h3>
            <ul>
              {WINE__DATA.map((item) => (
                <li key={item.id}>
                  <div>
                    {" "}
                    <h4 className="list__title">{item.title}</h4>
                    <span className="line"></span>
                    <span className="price">${item.price}</span>
                  </div>
                  <p className="list__description">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="image">
            <img src={specialImage} alt="special" />
          </div>
          <div className="cocktails">
            <h3 className="title">Cocktails</h3>
            <ul>
              {COCKTAILS__DATA.map((item) => (
                <li key={item.id}>
                  <div>
                    {" "}
                    <h4 className="list__title">{item.title}</h4>
                    <span className="line"></span>
                    <span className="price">${item.price}</span>
                  </div>
                  <p className="list__description">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <Button text="view more" href="/" />
    </section>
  );
};

export default Special;
