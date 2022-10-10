import React from "react";
import Section01 from "../../components/section1/Section01";
import Section02 from "../../components/section2/Section02";
import Section03 from "../../components/section3/Section03";
import Section04 from "../../components/section4/Section04";
import Section05 from "../../components/section5/Section05";

const Home = () => {
  return (
    <div className="home--page">
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
    </div>
  );
};

export default Home;
