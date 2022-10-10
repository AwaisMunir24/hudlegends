import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Section06 from "../../components/section6/Section06";
import "./Footer.css";
const Footer = () => {
  const [offset, setOffset] = useState(0);
  const classFooter =
    document.body.scrollHeight <= offset + window.innerHeight
      ? "section6item gr--sec6item"
      : "section6item ";

  useEffect(() => {
    console.log(window.innerHeight, "innerheight");
    console.log(document.body.scrollHeight, "scroll hight");
    console.log(document.body.scrollHeight < offset + window.innerHeight + 200);
    console.log(offset + 10, "ofset");
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return (
    <>
      <Section06 />
      <footer
        className={
          document.body.scrollHeight <= offset + window.innerHeight + "200px"
            ? "over--lay--footer--hidden"
            : "over--lay--footer"
        }
      >
        <div
          className={
            document.body.scrollHeight < offset + window.innerHeight + 160
              ? "socialWrapper"
              : "socialWrapper over--lay--footer "
          }
          style={{
            lineHeight:
              document.body.scrollHeight <= offset + window.innerHeight
                ? "60px"
                : "46px",
            Height:
              document.body.scrollHeight <= offset + window.innerHeight
                ? "60px"
                : "46px",
          }}
        >
          <a className={classFooter} href="https://t.me/hoodlegendsio">
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a
            className={classFooter}
            href="https://discord.com/invite/fW49BbE5jX"
          >
            <i className="fa-brands fa-discord"></i>
          </a>
          <a className={classFooter} href="https://twitter.com/hoodlegendsio">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a className={classFooter} href="https://instagram.com/hoodlegendsio">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            className={classFooter}
            href="https://www.youtube.com/channel/UC6Earh4vsPPz1yAPFFhlVNg"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            className={classFooter}
            href="https://www.reddit.com/r/hoodlegendsio/"
          >
            <i className="fa-brands fa-reddit"></i>
          </a>
          <a className={classFooter} href="https://medium.com/@hoodlegendsio">
            <i className="fa-brands fa-medium"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
