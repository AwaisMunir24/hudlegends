import React from "react";
import "./Section02.css";
const Section02 = () => {
  return (
    <>
      <div className="section section2">
        <div className="sectionWrapper">
          <div className="sectionSmallTitle">TRUE WEB 3.0 IS HERE</div>
          <div className="sectionBigTitle">The stage is now truly yours</div>

          <div className="section2video">
            <iframe
              src="https://www.youtube.com/embed/LQkRBM68Ocs?controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section02;
