import React from "react";
import { Faq, Footer, Top } from "../Components/LandingSub-Pages";
import { LandingLayout } from "../layouts/LandingLayout";

const faqs = [
  {
    quest: "DoEtiam sit rhoncus fermentum cras?",
    ans: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    bottomClass: "bottomLine",
  },

  {
    quest: "DoEtiam sit rhoncus fermentum cras aliquet dolor. Porta ?",
    ans: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    bottomClass: "greyLine",
  },

  {
    quest: "DoEtiam sit rhoncus fermentum cras aliquet dolor. Porta ?",
    ans: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    bottomClass: "bottomLine",
  },
];
export const FaqPage = () => {
  return (
    <LandingLayout>
      <section className="faqBlock">
        <h2>Frequently Asked Questions</h2>
        <div className="block">
          {faqs.map((item, idx) => (
            <Faq item={item} />
          ))}
        </div>
      </section>

      <section className="faqMessage">
        <div className="message">
          <div>
            <h4>Still have questions?</h4>
            <p>
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>

          <div>
            <button>Send message</button>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
};
