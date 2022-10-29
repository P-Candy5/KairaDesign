import React from "react";
import { Testimony } from "./Testimony";

export const AllTestimonies = () => {
  return (
    <>
      <section className="testimonies">
        <h2>Testimonials</h2>

        <div className="imageHolder">
          {[
            "./images/unknown.svg",
            "./images/unknown.svg",
            "./images/man.svg",
            "./images/unknown.svg",
            "./images/unknown.svg",
          ].map((item, idx) => (
            <Testimony item={item} />
          ))}
        </div>
      </section>

      <section className="test">
        <div>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            commodo, id donec integer amet in id risus. Nisi cursus eget
            ultrices.”
          </p>
        </div>
        <div>
          <h4>Charlse Darwin </h4>
          <p>CEO, Darwin Electronics</p>
        </div>
      </section>
    </>
  );
};
