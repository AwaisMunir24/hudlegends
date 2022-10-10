import React, { useState } from "react";
import './section01.css'
const Section01 = () => {
  const [forTalent, setForTalent] = useState(true);

  return (
    <>
      <div className="section section1">
        <div className="sectionWrapper">
          <div className="smokeWrapper">
            <div className="smoke smoke1"></div>
            <div className="smoke smoke1"></div>
            <div className="smoke smoke1"></div>
            <div className="smoke smoke1"></div>
          </div>
          <div className="section1main">
            <div className="section1arrowLeft">
              {forTalent ? null : (
                <i
                  onClick={() => {
                    setForTalent(true);
                  }}
                  className="fa-solid fa-caret-left"
                ></i>
              )}
            </div>

            {forTalent ? (
              <div className="section1image">
                <div className="section1imageTalent"></div>
              </div>
            ) : null}

            {forTalent ? null : (
              <div className="section1image">
                <div className="section1imageVoters"></div>
              </div>
            )}

            <div className="section1Content">
              <div className="section1ContentSwitcher">
                <div
                  onClick={() => setForTalent(true)}
                  className={
                    forTalent
                      ? "section1ContentSwitcherItem section1ContentSwitcherItemActive"
                      : "section1ContentSwitcherItem"
                  }
                >
                  COMPETE TO EARN
                </div>
                <div
                  onClick={() => setForTalent(false)}
                  className={
                    forTalent
                      ? "section1ContentSwitcherItem"
                      : "section1ContentSwitcherItem section1ContentSwitcherItemActive2"
                  }
                >
                  VOTE TO EARN
                </div>
              </div>

              {forTalent ? (
                <div className="section1ContentTitle">
                  Join contests to earn rewards and title
                </div>
              ) : null}

              {forTalent ? null : (
                <div className="section1ContentTitle section1ContentTitleB">
                  Earn rewards for voting in contests
                </div>
              )}

              {forTalent ? (
                <div className="section1ContentText">
                  Hood Legends is a community driven, blockchain based mobile
                  application platform for artists such as singers, dancers,
                  magicians, comedians, actors, etc. to compete with each other
                  for rewards and title.
                </div>
              ) : null}

              {forTalent ? null : (
                <div className="section1ContentText section1ContentTextB">
                  As community, you can earn tokens for voting in contests. We
                  have designed an ecosystem that helps you engage like never
                  before, making Hood Legends a one of a kind and the first ever
                  talent platform for community.
                </div>
              )}

              <div className="section1ContentHint">
                COMING SOON TO ANDROID & IOS
              </div>
            </div>

            <div className="section1arrowRight">
              {forTalent ? (
                <i
                  onClick={() => {
                    setForTalent(false);
                  }}
                  className="fa-solid fa-caret-right"
                ></i>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section01;
