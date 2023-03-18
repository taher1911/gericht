import React, { lazy } from "react";

import PageTransiton from "../components/page-transition/PageTransiton";

const Header = lazy(() => import("../components/home/header/Header"));
const About = lazy(() => import("../components/home/about/About"));
const Booking = lazy(() => import("../components/home/booking/Booking"));
const Menus = lazy(() => import("../components/home/menus/Menus"));
const Special = lazy(() => import("../components/home/special/Special"));
const Believe = lazy(() => import("../components/home/believe/Believe"));
const Customers = lazy(() => import("../components/home/customers/Customers"));
const Laurels = lazy(() => import("../components/home/laurels/Laurels"));
const Gallery = lazy(() => import("../components/home/gallery/Gallery"));

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
