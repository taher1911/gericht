import React from "react";

import PageTransiton from "../components/page-transition/PageTransiton";

import PagesHeader from "../ui/other-pages-header/Header";
import Serving from "../components/services/serving/Serving";
import Booking from "../components/home/booking/Booking";
import Menus from "../components/home/menus/Menus";
import Happy from "../components/services/happy/Happy";

const Services = () => {
  return (
    <PageTransiton>
      <PagesHeader pageTitle="Services" />
      <Serving />
      <Menus />
      <Booking />
      <Happy />
    </PageTransiton>
  );
};

export default Services;
