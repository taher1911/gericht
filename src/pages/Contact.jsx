import React, { lazy } from "react";

import PageTransiton from "../components/page-transition/PageTransiton";

const Container = lazy(() => import("../ui/container/Container"));
const PagesHeader = lazy(() => import("../ui/other-pages-header/Header"));
const Map = lazy(() => import("../components/contact/map/Map"));
const Form = lazy(() => import("../components/contact/form/Form"));
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
