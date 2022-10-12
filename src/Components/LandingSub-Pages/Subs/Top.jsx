import React from "react";
import { Link } from "react-router-dom";

export const Top = () => {
  return (
    <section className="logoHolder">
      <div>
        <img src="./images/kairaLogo.svg"></img>
      </div>
      <div>
        <ul className="faq">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/Faq">FAQ</Link>
          </li>
          <li>
            <button>
              <div>
                <img src="./images/downloadIcon.svg" />
                <p> Download</p>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};
