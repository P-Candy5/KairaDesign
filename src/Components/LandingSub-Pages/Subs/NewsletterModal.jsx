import React from "react";
import { useState } from "react";

export const NewsletterModal = ({ isOpen = true, setModal }) => {
  return (
    <section
      // className="newsletter"
      className={" newsletter"}
      onClick={() => setModal(false)}
    >
      <div
        className="subscribe"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* <div className="hold"> */}
        <div className="forward" onClick={() => setModal(false)}>
          <img src="./images/naviButton.svg" />
        </div>
        <div>
          <h2>Subscribe to our Newsletter</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            tellus convallis sed interdum. Leo, cursus adipiscing ridiculus eget
            purus aliquet. Enim nec bibendum egestas in a non commodo mauris.
            Aliquet fermentum tristique nunc nullam curabitur cum
          </p>
          <section>
            <label>Email</label>
            <input type="text" placeholder="input your email in here" />
          </section>
          <section>
            <button>Subscribe</button>
          </section>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};
