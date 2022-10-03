import React from "react";

export const MapWorks = ({ item }) => {
  return (
    <div>
      <div className="kairaTips">
        <img src={item.svg} />
      </div>
      <p>{item.app}</p>
    </div>
  );
};
