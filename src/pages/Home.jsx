import React from "react";

import PageTransiton from "../components/page-transition/PageTransiton";

import Header from "../components/home/header/Header";
import About from "../components/home/about/About";
import Booking from "../components/home/booking/Booking";
import Menus from "../components/home/menus/Menus";
import Special from "../components/home/special/Special";
import Believe from "../components/home/believe/Believe";
import Customers from "../components/home/customers/Customers";
import Laurels from "../components/home/laurels/Laurels";
import Gallery from "../components/home/gallery/Gallery";

const Home = () => {
  return (
    <PageTransiton>
      <Header />
      <About />
      <Booking />
      <Menus />
      <Special />
      <Believe />
      <Customers />
      <Laurels />
      <Gallery />
    </PageTransiton>
  );
};

export default Home;
