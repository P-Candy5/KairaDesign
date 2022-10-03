import React from "react";
import { Faq } from "./Faq";
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

export const Questions = () => {
  return (
    <section className="faqBlock">
      <h2>Frequently Asked Questions</h2>
      <div className="block">
        {faqs.map((item, idx) => (
          <Faq item={item} />
          // <Faq
          //   heading={item.quest}
          //   text={item.ans}
          //   useClass={item.bottomClass}
          // />
        ))}
      </div>
      <div className="sendButon">
        <button>Send more</button>
      </div>
    </section>
  );
};

{
  /* <Faq heading="DoEtiam sit rhoncus fermentum cras?" />
        <Faq
          heading="DoEtiam sit rhoncus fermentum cras aliquet dolor. Porta ?"
          middle={true}
        />
        <Faq heading="Etiam sit rhoncus fermentum? " /> */
}
