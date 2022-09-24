import React from "react";

export const Homepage = () => {
  return (
    <main>
      <section className="logoHolder">
        <div>
          <img src="./images/kairaLogo.svg"></img>
        </div>
        <div>
          <ul className="faq">
            <li>About</li>
            <li>Contact Us</li>
            <li>FAQ</li>
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

      <section>
        <section className="illustration">
          <div>
            <h1>Find Service providers near your Business on Kaira</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec dui,
              ut diam, purus enim. Libero et, ornare tempor tristique viverra
            </p>
            <div className="getStore">
              <img src="./images/googlestore.svg" />
              <img src="./images/appstore.svg" />
            </div>
          </div>

          <div className="imageIllustration">
            <img src="./images/illustration.svg" />
          </div>
        </section>
      </section>

      <section className="works">
        <h2>
          How <span>Kaira</span> Works
        </h2>

        <div className="kairaApp">
          <div>
            <div className="kairaTips">
              <img src="./images/kairaApp.svg" />
            </div>
            <p>Download Kiara app and Log In or create an account</p>
          </div>
          <div>
            <div className="kairaTips">
              <img src="./images/shipment.svg" />
            </div>
            <p>Search for Artisian, Client or shop owner</p>
          </div>
          <div>
            <div className="kairaTips">
              <img src="./images/Information.svg" />
            </div>
            <p>Get connected to artisian or shop owner</p>
          </div>
        </div>
      </section>

      <section>
        <section className="linkService">
          <div className="trackTime">
            <div className="kairaServices">
              <img src="./images/track.svg" />
            </div>

            <div className="realtime">
              <h2>Real Time Tracking</h2>
              <p>
                Viverra nunc rhoncus sit gravida sagittis in. Massa ultrices
                elit imperdiet orci, diam purus velit. Ac metus quisque.
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
                Viverra nunc rhoncus sit gravida sagittis in. Massa ultrices
                elit imperdiet orci, diam purus velit. Ac metus quisque.
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
                Viverra nunc rhoncus sit gravida sagittis in. Massa ultrices
                elit imperdiet orci, diam purus velit. Ac metus quisque.
              </p>
            </div>
          </div>
        </section>

        <section className="testimonies">
          <h2>Testimonials</h2>

          <div className="imageHolder">
            <div>
              <img src="./images/unknown.svg" />
            </div>
            <div>
              <img src="./images/unknown.svg" />
            </div>
            <div>
              <img src="./images/man.svg" />
            </div>
            <div>
              <img src="./images/unknown.svg" />
            </div>
            <div>
              <img src="./images/unknown.svg" />
            </div>
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
      </section>

      <section className="collaborate">
        <h5> We collaborate with 200+ of happy companies, including:</h5>
        <div className="companies">
          <img src="./images/circleLogo.svg" />
          <img src="./images/tetra.svg" />
          <img src="./images/triangle.svg" />
          <img src="./images/hexagon.svg" />
          <img src="./images/company.svg" />
        </div>
      </section>

      <section className="faqBlock">
        <h2>Frequently Asked Questions</h2>
        <div className="block">
          <div className="questions">
            <h4>DoEtiam sit rhoncus fermentum cras?</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts
            </p>
            <div className="bottomLine"></div>
          </div>

          <div className="questions">
            <h4>DoEtiam sit rhoncus fermentum cras aliquet dolor. Porta ?</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts
            </p>
          </div>

          <div className="questions">
            <h4>Etiam sit rhoncus fermentum? </h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts
            </p>
          </div>
        </div>
        <div className="sendButon">
          <button>Send more</button>
        </div>
      </section>

      <section className="available">
        <h2>
          Get <span>Kaira</span> App On
        </h2>

        <div className="store">
          <img src="./images/googlestore.svg" />
          <img src="./images/appstore.svg" />
        </div>
      </section>
    </main>
  );
};
