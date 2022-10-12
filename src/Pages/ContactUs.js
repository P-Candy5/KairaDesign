import React from "react";
import { LandingLayout } from "../layouts/LandingLayout";

export const ContactUs = () => {
  return (
    <LandingLayout>
      <section className="contact">
        <div className="GroupImage">
          <img src="./images/GroupImage.svg" />
        </div>
        <div>
          <h3>Send us message</h3>
          <p>
            Fill up the form. Your e-mail will not be published. Required fields
            are marked by *
          </p>
          <form action="">
            <div className="names">
              <input type="text" placeholder="Firstname" />
              <input type="text" placeholder="Lastname" />
            </div>
            <section className="text">
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Subject" />
              <textarea rows={5} cols={30} placeholder="Message"></textarea>
            </section>
            <section className="recapta">
              <div>
                <input type="checkbox" />
                <p>i’m not a robot</p>
              </div>
              <section>
                <img src="./images/recapta.svg" />
              </section>
            </section>
          </form>
        </div>
      </section>
    </LandingLayout>
  );
};
