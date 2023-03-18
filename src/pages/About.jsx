import React from "react";

import PageTransiton from "../components/page-transition/PageTransiton";

import PagesHeader from "../ui/other-pages-header/Header";
import History from "../components/about/history/History";
import Hours from "../components/about/hours/Hours";
import Believe from "../components/home/believe/Believe";
import Customers from "../components/home/customers/Customers";
import Gallery from "../components/home/gallery/Gallery";

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
