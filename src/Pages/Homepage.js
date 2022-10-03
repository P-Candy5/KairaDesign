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

export const Homepage = () => {
  return (
    <>
      <main>
        <Top />

        <Illustration />

        <Works />

        <Diagram />

        <Collaboration />
        <Questions />

        <GetApp />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
