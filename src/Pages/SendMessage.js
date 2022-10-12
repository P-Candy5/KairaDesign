import React from "react";
import { Top } from "../Components/LandingSub-Pages";
import { LandingLayout } from "../layouts/LandingLayout";

export const SendMessage = () => {
  return (
    <LandingLayout>
      <section className="moreQuestions">
        <div className="moreQuestionsHolder">
          <div>
            <h3>Still have a question? </h3>
            <p>Send us message if you are not getting what you need </p>
          </div>

          <div>
            <div>
              <textarea rows={6} cols={40} placeholder="Message"></textarea>
            </div>
            <input type="text" placeholder="Email  address" />
            <div>
              <button>Send question</button>
            </div>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
};
