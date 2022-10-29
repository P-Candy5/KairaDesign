import React from "react";
import { AllTestimonies } from "./AllTestimonies";
import { Testimony } from "./Testimony";

export const Diagram = () => {
  return (
    <>
      <section className="linkService">
        <div className="trackTime">
          <div className="kairaServices">
            <img src="./images/track.svg" />
          </div>

          <div className="realtime">
            <h2>Real Time Tracking</h2>
            <p>
              Viverra nunc rhoncus sit gravida sagittis in. Massa ultrices elit
              imperdiet orci, diam purus velit. Ac metus quisque.
            </p>
          </div>
        </div>
        <div className="line1">
          <img src="./images/line1.svg" />
        </div>

        <div className="premiumServices">
          <div className="realtime">
            <h2>Premium Services</h2>
            <p>
              Viverra nunc rhoncus sit gravida sagittis in. Massa ultrices elit
              imperdiet orci, diam purus velit. Ac metus quisque.
            </p>
          </div>
          <div className="kairaServices">
            <img src="./images/premium.svg" />
          </div>
        </div>

        <div className="line2">
          <img src="./images/line2.svg" />
        </div>

        <div className="hours">
          <div className="kairaServices">
            <img src="./images/services.svg" />
          </div>

          <div className="realtime">
            <h2>24 Hours Services</h2>
            <p>
              Viverra nunc rhoncus sit gravida sagittis in. Massa ultrices elit
              imperdiet orci, diam purus velit. Ac metus quisque.
            </p>
          </div>
        </div>
      </section>

      <section>
        <AllTestimonies />
      </section>
    </>
  );
};
