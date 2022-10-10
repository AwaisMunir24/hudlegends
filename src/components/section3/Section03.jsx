import React from "react";
import "./Section03.css";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
const Section03 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
   
  };

  return (
    <>
      <div className="section section3">
        <div className="sectionWrapper">
          <div className="sectionSmallTitle">PLATFORM FEATURES</div>
          <div className="sectionBigTitle">Blockchain meets use-case</div>

          <div className="section3text">
            We are solving a huge problem that many professional and talented
            people go through. Our platform gives a fair and equal chance to
            everyone.
          </div>
          <div className="web_view">
            <div className="section3itemsWrapper">
              <div className="section3item">
                <div className="section3itemTitle">Stage for everyone</div>
                <div className="section3itemText">
                  Our platform is open to anyone who wishes to compete and
                  showcase their talent. We have no barrier to entry so everyone
                  gets a fair chance.
                </div>
              </div>

              <div className="section3item section3item2">
                <div className="section3itemTitle">Community voting</div>
                <div className="section3itemText">
                  No more monopoly of judges, our decision makers are the people
                  themselves. Who wins or who loses is entirely decided by the
                  people.
                </div>
              </div>

              <div className="section3item">
                <div className="section3itemTitle">3-Way Economy</div>
                <div className="section3itemText">
                  We have designed an ecosystem that rewards stakers true value
                  such as voting rights, viewing rights, etc. instead of
                  unsustainable returns.
                </div>
              </div>

              <div className="section3item section3item2">
                <div className="section3itemTitle">Marketplace</div>
                <div className="section3itemText">
                  Our voters can enjoy exclusive rewards that will be available
                  only at our marketplace. We will offer both digital and
                  physical goods.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Sliders custom--awais--slide">
        <Slider {...settings}>
          <div className="section3item">
            <div className="section3itemTitle">Stage for everyone</div>
            <div className="section3itemText">
              Our platform is open to anyone who wishes to compete and showcase
              their talent. We have no barrier to entry so everyone gets a fair
              chance.
            </div>
          </div>

          <div className="section3item section3item2">
            <div className="section3itemTitle">Community voting</div>
            <div className="section3itemText">
              No more monopoly of judges, our decision makers are the people
              themselves. Who wins or who loses is entirely decided by the
              people.
            </div>
          </div>
          <div className="section3item">
            <div className="section3itemTitle">3-Way Economy</div>
            <div className="section3itemText">
              We have designed an ecosystem that rewards stakers true value such
              as voting rights, viewing rights, etc. instead of unsustainable
              returns.
            </div>
          </div>
          <div className="section3item section3item2">
            <div className="section3itemTitle">Marketplace</div>
            <div className="section3itemText">
              Our voters can enjoy exclusive rewards that will be available only
              at our marketplace. We will offer both digital and physical goods.
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Section03;
