import React from "react";
import { Link } from "react-router-dom";
import "./Section06.css";
const Section06 = () => {
  return (
    <div className="section section6">
      <div className="sectionWrapper">
        <div className="section6title">hello@hoodlegends.io</div>
        <div className="section6Icons-footer">
          <a
            className="icon-sssgr--foter"
            href="https://t.me/hoodlegendsio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a
            className="icon-sssgr--foter"
            href="https://discord.com/invite/fW49BbE5jX"
          >
            <i className="fa-brands fa-discord"></i>
          </a>
          <a
            className="icon-sssgr--foter"
            href="https://twitter.com/hoodlegendsio"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            className="icon-sssgr--foter"
            href="https://instagram.com/hoodlegendsio"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            className="icon-sssgr--foter"
            href="https://www.youtube.com/channel/UC6Earh4vsPPz1yAPFFhlVNg"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            className="icon-sssgr--foter"
            href="https://www.reddit.com/r/hoodlegendsio/"
          >
            <i className="fa-brands fa-reddit"></i>
          </a>
          <a
            className="icon-sssgr--foter"
            href="https://medium.com/@hoodlegendsio"
          >
            <i className="fa-brands fa-medium"></i>
          </a>
        </div>
        <div className="copyright">
          COPYRIGHT HOOD LEGENDS 2022 - ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Section06;
