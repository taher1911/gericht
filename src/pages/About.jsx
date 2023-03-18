import React, { lazy } from "react";

import PageTransiton from "../components/page-transition/PageTransiton";

const PagesHeader = lazy(() => import("../ui/other-pages-header/Header"));
const History = lazy(() => import("../components/about/history/History"));
const Hours = lazy(() => import("../components/about/hours/Hours"));
const Believe = lazy(() => import("../components/home/believe/Believe"));
const Customers = lazy(() => import("../components/home/customers/Customers"));
const Gallery = lazy(() => import("../components/home/gallery/Gallery"));

const About = () => {
  return (
    <PageTransiton>
      <PagesHeader pageTitle="About Us" />
      <History />
      <Hours />
      <Believe />
      <Customers />
      <Gallery />
    </PageTransiton>
  );
};

export default About;
