import React from "react";

import Container from "../../../ui/container/Container";
import SectionTitle from "../../../ui/section-title/SectionTitle";
import Customer from "./Customer";

import images from "../../../assets/customers";
import restaurantLogo from "../../../assets/restaurant-logo.svg";
import "./Customers.css";

const CustomersDATA = [
  {
    id: 1,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    name: "Wade Warren",
    job: "Sommelier",
    image: images.customer1,
  },
  {
    id: 2,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    name: "Jane Cooper",
    job: "Chef",
    image: images.customer2,
  },
  {
    id: 3,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    name: "Robert Fox",
    job: "Chef",
    image: images.customer3,
  },
  {
    id: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    name: "Brooklyn Simmons",
    job: "Caterer",
    image: images.customer4,
  },
];
const Customers = () => {
  return (
    <section className="home__customers">
      <Container>
        <SectionTitle title="Testimony" subTitle="Happy customers" />
        <div className="customers">
          {CustomersDATA.map((customer) => (
            <Customer
              key={customer.id}
              comment={customer.comment}
              name={customer.name}
              job={customer.job}
              image={customer.image}
            />
          ))}
        </div>
      </Container>
      <img src={restaurantLogo} alt="restaurant" className="restaurant-logo" />
    </section>
  );
};

export default Customers;
