import React from "react";

import PageTransiton from "../components/page-transition/PageTransiton";

import Container from "../ui/container/Container";
import PagesHeader from "../ui/other-pages-header/Header";
import Map from "../components/contact/map/Map";
import Form from "../components/contact/form/Form";
const Contact = () => {
  return (
    <PageTransiton>
      <PagesHeader pageTitle="Contact Us" />
      <Container>
        {" "}
        <Map />
      </Container>
      <Form />
    </PageTransiton>
  );
};

export default Contact;
