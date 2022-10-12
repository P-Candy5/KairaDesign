import React from "react";
// import { CollabImages } from "./CollabImages";

// export const CollabImages = ({ item }) => {
//   return (
//     <>
//       <img src={item} />
//     </>
//   );
// };

export const Collaboration = () => {
  return (
    <section className="collaborate">
      <h5> We collaborate with 200+ of happy companies, including:</h5>
      <div className="companies">
        {[
          "./images/circleLogo.svg",
          "./images/tetra.svg",
          "./images/triangle.svg",
          "./images/hexagon.svg",
          "./images/company.svg",
        ].map((item, idx) => (
          // <CollabImages item={item} />
          <img src={item} />
        ))}
      </div>
    </section>
  );
};
