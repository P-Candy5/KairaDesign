import React from "react";

import { ContactUs, FaqPage, Homepage, Privacy, SendMessage } from "./Pages";

import { Routes, BrowserRouter, Route } from "react-router-dom";
import { NewsletterModal } from "./Components/LandingSub-Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Faq" element={<FaqPage />}></Route>
        <Route path="/send-message" element={<SendMessage />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
