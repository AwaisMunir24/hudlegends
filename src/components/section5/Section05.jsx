import React, { useState } from "react";
import "./Section05.css";
const Section05 = () => {
  const [path, setPath] = useState(0);
  const moveRoad = (direction) => {
    if (direction === "right") {
      setPath(path - 300);
      if (path <= -1200) {
        setPath(-1200);
      }
    }

    if (direction === "left") {
      setPath(path + 300);
      if (path >= 0) {
        setPath(0);
      }
    }
  };
  return (
    <>
      <div className="section section5">
        <div className="sectionWrapper">
          <div className="sectionSmallTitle">ROADMAP</div>
          <div className="sectionBigTitle">Prioritizing what matters</div>
          <div className="section3text">
            We are a diverse team of talented people who love what they do. We
            have people from all around the globe with a common goal, to make
            Web 3.0 accessible to all.
          </div>

          <div className="section5masterWrapper">
            <div className="section5outer">
              <div
                style={{ transform: `translateX(${path}px)` }}
                className="section5itemsWrapper"
              >
                <div className="section5item">
                  <div className="section5itemTitle">Q4 2022</div>
                  <div className="section5itemLine section5itemLineDone">
                    <i className="fa-solid fa-circle-check"></i> Preliminary
                    Team Formation
                  </div>
                  <div className="section5itemLine section5itemLineDone">
                    <i className="fa-solid fa-circle-check"></i> Initial
                    Concepts
                  </div>
                  <div className="section5itemLine section5itemLineDone">
                    <i className="fa-solid fa-circle-check"></i> Preliminary
                    Market Research
                  </div>
                  <div className="section5itemLine section5itemLineNow">
                    <i className="fa-solid fa-circle-dot"></i> Pre-Seed Round
                  </div>
                  <div className="section5itemLine section5itemLineNow">
                    <i className="fa-solid fa-circle-dot"></i> Economic Research
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Tokenomics
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Whitepaper
                  </div>
                </div>

                <div className="section5item">
                  <div className="section5itemTitle">Q1 2023</div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Application
                    Wireframes
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Application
                    Development
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Website Development
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Marketing
                    Exploration
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Seed / Private
                    Round
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Deploy Smart
                    Contracts
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Security Audit
                  </div>
                </div>

                <div className="section5item">
                  <div className="section5itemTitle">Q2 2023</div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Continued
                    Development
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Media Partnerships
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Influencer
                    Engagement
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Preliminary
                    Marketing
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Presale A & B
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Legal Advice
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Progress Analysis
                  </div>
                </div>

                <div className="section5item">
                  <div className="section5itemTitle">Q3 2023</div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i>Alpha Testing
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Hood Legends
                    Trailer
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Initiate Marketing
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Launchpads
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Token Generation
                    Event
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Holders Incentive
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> CEX Listing
                  </div>
                </div>

                <div className="section5item">
                  <div className="section5itemTitle">Q4 2023</div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Closed Beta
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Continued Marketing
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Launch & Growth
                    Strategy
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Marketplace
                    Development
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Marketplace
                    Partnerships
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Secondary Audits
                  </div>
                  <div className="section5itemLine">
                    <i className="fa-regular fa-circle"></i> Progress & Growth
                    Analysis
                  </div>
                </div>
              </div>
            </div>

            <div className="section5overlay">
              {path >= 0 ? null : (
                <div className="section5overlayLeft">
                  <i
                    onClick={() => moveRoad("left")}
                    className="fa-solid fa-caret-left"
                  ></i>
                </div>
              )}

              {path <= -1200 ? null : (
                <div className="section5overlayRight">
                  <i
                    onClick={() => moveRoad("right")}
                    className="fa-solid fa-caret-right"
                  ></i>
                </div>
              )}
            </div>
          </div>

          <div className="section5legend">
            <div className="section5legendItem section5legendItem1">
              <i className="fa-solid fa-circle-check"></i> Completed
            </div>
            <div className="section5legendItem section5legendItem2">
              <i className="fa-solid fa-circle-dot"></i> In-Progress
            </div>
            <div className="section5legendItem section5legendItem3">
              <i className="fa-regular fa-circle"></i> Incomplete
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section05;
