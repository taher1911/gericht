import React, { lazy } from "react";

import PageTransiton from "../components/page-transition/PageTransiton";

const Container = lazy(() => import("../ui/container/Container"));
const PagesHeader = lazy(() => import("../ui/other-pages-header/Header"));
const TeamSliser = lazy(() => import("../components/team/team-slider/Team"));
const Video = lazy(() => import("../components/about/hours/Video"));
const Laurels = lazy(() => import("../components/home/laurels/Laurels"));

const Team = () => {
  return (
    <PageTransiton>
      <PagesHeader pageTitle="Team" />
      <Container>
        <TeamSliser />
        <Video />
      </Container>
      <Laurels />
    </PageTransiton>
  );
};

export default Team;
