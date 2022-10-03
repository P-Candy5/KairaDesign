import React from "react";

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
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">FAQ</a>
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
