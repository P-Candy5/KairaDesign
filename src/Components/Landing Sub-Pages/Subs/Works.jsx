import React from "react";
import { MapWorks } from "./MapWorks";

export const Works = () => {
  return (
    <section className="works">
      <h2>
        How <span>Kaira</span> Works
      </h2>

      <div className="kairaApp">
        {[
          {
            svg: "./images/kairaApp.svg",
            app: "Download Kiara app and Log In or create an account",
          },

          {
            svg: "./images/shipment.svg",
            app: "Search for Artisian, Client or shop owner",
          },

          {
            svg: "./images/Information.svg",
            app: "Get connected to artisian or shop owner",
          },
        ].map((item, idx) => (
          <MapWorks item={item} />
        ))}
      </div>
    </section>
  );
};
