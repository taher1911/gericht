import React, { lazy } from "react";

import PageTransiton from "../components/page-transition/PageTransiton";

const PagesHeader = lazy(() => import("../ui/other-pages-header/Header"));
const Serving = lazy(() => import("../components/services/serving/Serving"));
const Booking = lazy(() => import("../components/home/booking/Booking"));
const Menus = lazy(() => import("../components/home/menus/Menus"));
const Happy = lazy(() => import("../components/services/happy/Happy"));

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
