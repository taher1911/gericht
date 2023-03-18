import React from "react";

import PageTransiton from "../components/page-transition/PageTransiton";

import Container from "../ui/container/Container";
import PagesHeader from "../ui/other-pages-header/Header";
import TeamSliser from "../components/team/team-slider/Team";
import Video from "../components/about/hours/Video";
import Laurels from "../components/home/laurels/Laurels";

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
