import React from "react";
import {
  Footer,
  Top,
  Illustration,
  Works,
  Diagram,
  Collaboration,
  GetApp,
  Questions,
} from "../Components/LandingSub-Pages/index";
import { LandingLayout } from "../layouts/LandingLayout";

export const Homepage = () => {
  return (
    <LandingLayout>
      <main>
        <Illustration />

        <Works />

        <Diagram />

        <Collaboration />
        <Questions />

        <GetApp />
      </main>
    </LandingLayout>
  );
};
