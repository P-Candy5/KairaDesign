import React from "react";

export const Faq = ({ item }) => {
  return (
    <div className="questions">
      <h4>{item.quest}</h4>
      <p>{item.ans}</p>
      <div className={item.bottomClass}></div>
    </div>
  );
};
