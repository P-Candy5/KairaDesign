import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NewsletterModal } from "./NewsletterModal";

export const Footer = () => {
  const [modal, setModal] = useState(false);
  return (
    <section className="sectionFooter">
      <section className="kairaFooter">
        <div>
          <img src="./images/blueLogo.svg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus orci
            at nunc vestibulum in in quis.
          </p>
        </div>
        <div className="contactFooter">
          <div>
            <h4>About</h4>
            <div>
              <p>
                <a href="#">How Kaira works</a>
              </p>
              <p>
                <a href="#">Testimonies</a>
              </p>
              <p>
                <a href="#">Collaborations</a>
              </p>
            </div>
          </div>

          <div>
            <h4>Contact Us</h4>
            <div>
              <p>
                <a href="#">{<NewsletterModal />}Newsletter</a>
              </p>
              <p>
                <a href="#">Send us a message</a>
              </p>
            </div>
          </div>

          <div>
            <h4>Others</h4>
            <div>
              <p>
                <a href="#">Our FAQ</a>
              </p>

              <p>
                <Link to="/privacy">Terms of Service</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="social">
        <div className="media">
          <div>
            <img src="./images/linkedin.svg" />
          </div>
          <div>
            <img src="./images/twitter.svg" />
          </div>
          <div>
            <img src="./images/facebook.svg" />
          </div>
          <div>
            <img src="./images/instagram.svg" />
          </div>
        </div>
        <div className="blueApp">
          <p>Download our app</p>
          <div>
            <img src="./images/bluegooglestore.svg" />
            <img src="./images/blueappstore.svg" />
          </div>
        </div>
      </section>
    </section>
  );
};
