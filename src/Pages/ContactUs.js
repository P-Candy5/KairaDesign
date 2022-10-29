import React, { useState } from "react";
import { LandingLayout } from "../layouts/LandingLayout";

export const ContactUs = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const info = {
    firstname,
    lastname,
    email,
    subject,
    text,
  };
  // console.log(info);
  // console.log(info);
  // console.log(setFirstName(""));
  // setLastName("");
  // setEmail("");
  // setSubject("");
  // setText("");

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
              <input
                type="text"
                placeholder="Firstname"
                value={firstname}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Lastname"
                value={lastname}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <section className="text">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
              <textarea
                rows={5}
                cols={30}
                placeholder="Message"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              ></textarea>
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

            <section className="contactButton">
              <button onClick={console.log(info)}>Send</button>
            </section>
          </form>
        </div>
      </section>
    </LandingLayout>
  );
};
