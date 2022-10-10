import React, { useContext, useState } from "react";
import "./Section04.css";
import Slider from "react-slick";

import t1 from "../../assets/images/t1.png";
import t2 from "../../assets/images/t2.png";
import t3 from "../../assets/images/t3.png";
import t4 from "../../assets/images/t4.png";
import t5 from "../../assets/images/t5.png";
import t6 from "../../assets/images/t6.png";
import t7 from "../../assets/images/t7.png";
import t8 from "../../assets/images/t8.png";
import t9 from "../../assets/images/t9.png";
import { contentCreate } from "../../context/reducer/UseReducer";
const Section04 = () => {
  const names = [
    "Haris Hussain",
    "Babar Ali",
    "Aslihan Sarigül",
    "David Tunold",
    "Mohsin Bashir",
    "James Ooi",
    "Shruti Kohli",
    "Karin Veri",
    "Valerie Leroy",
  ];
  const desc = [
    "Highly knowledgeable with both traditional businesses and blockchain ecosystems. Successful track record in start-up and experienced in marketing, e-commerce, distribution as well as creative direction.",
    "Top of his class and successful in many startups, Babar possesses skills in blockchain and business development. He is a master of growth, strategic connections and international expansion.",
    "Gifted in terms of creative thinking and has the ability brew up great ideas on her feet. Experienced with broad fields of study in arts and sociology with experience in photography, design and illustration.",
    "Experienced with sales and management and an aspiring musician with an original style of his own. David is skilled in building connections and has an eye to seek out talent.",
    "Accounting, finance and research, Mohsin is power packed with skills. He is a master of bookkeeping and is always trying to explore and learn new ways to improve his talent.",
    "James is very social and enthusiastic about crypto and blockchain technology. He loves to talk about new ideas to be able to connect with the community and has a keen interest in the future of metaverse",
    "Passionate and enthusiast aptly define her. She has an extensive experience in the telecom and digital sector addressing tax, regulatory and business structure issues. She loves the emerging world of crypto.",
    "Passionate about all things digital and their social-political impact on the civil society. She is also an experienced arts and theatre producer, with a vast international network of artists and creators.",
    "She has great industry insight and a problem-solving approach. Valerie has leadership skills and knows how to get the job done. Her skills and talent make her prepared to deal with any outcome on her feet.",
  ];
  const lo = [
    "FOUNDER & CEO",
    "CO-FOUNDER",
    "CONCEPT DEVELOPER",
    "TALENT MANAGER",
    "ACCOUNTS & FINANCE",
    "COMMUNITY MANAGER",
    "PARTNERSHIP ADVISOR",
    "PARTNERSHIP ADVISOR",
    "BUSINESS ADVISOR",
  ];
  const links = [
    "https://www.linkedin.com/in/qazi-haris-hussain/",
    "https://www.linkedin.com/in/babar110/",
    "https://www.linkedin.com/in/asl%C4%B1han-s-109569109/",
    "https://www.linkedin.com/in/david-tunold-a5b362225/",
    "https://www.linkedin.com/in/mohsin-bashir/",
    "https://www.linkedin.com/in/james-ooi-1bb677177/",
    "https://www.linkedin.com/in/shruti-kohli-35377b52/",
    "https://www.linkedin.com/in/karinaverigina/",
    "https://www.linkedin.com/in/leroyvalerie/",
  ];

  const [isActive, setisActive] = useState(false);
  const [isActive1, setisActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);
  const [isActive7, setIsActive7] = useState(false);
  const [isActive8, setIsActive8] = useState(false);
  const [tname, setTname] = useState("");
  const [forTalent, setForTalent] = useState(true);
  const [tlo, setTlo] = useState("");
  const [tdesc, setTdesk] = useState("");
  const [JoinSalePop, setJoinSalePop] = useState(false);
  const [showModal, setShowmodal] = useState(false);
  const [tImg, setTimg] = useState(t1);
  const [tlink, setTlink] = useState("");
  const [path, setPath] = useState(0);
  const setTeam = (index) => {
    setTname(names[index]);
    setTlo(lo[index]);
    setTdesk(desc[index]);
    setTlink(links[index]);

    if (index === 0) {
      setTimg(t1);
      setisActive(!isActive);
    }

    if (index === 1) {
      setTimg(t2);
      setisActive1(!isActive1);
    }

    if (index === 2) {
      setTimg(t3);
      setIsActive2(true);
    }

    if (index === 3) {
      setTimg(t4);
      setIsActive3(true);
    }

    if (index === 4) {
      setTimg(t5);
      setIsActive4(true);
    }

    if (index === 5) {
      setTimg(t6);
      setIsActive5(true);
    }

    if (index === 6) {
      setTimg(t7);
      setIsActive6(true);
    }

    if (index === 7) {
      setTimg(t8);
      setIsActive7(true);
    }
    if (index === 8) {
      setTimg(t9);
      setIsActive8(true);
    }
    setShowmodal(true);
  };
  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    arrows: true,
    infinite: true,
    centerPadding: "90px",
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    nextArrow: <i className="fa-solid fa-caret-right"></i>,
    prevArrow: <i class="fa-sharp fa-solid fa-caret-left"></i>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 2,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 670,
        settings: {
          centerPadding: "70px",
          slidesPerRow: 2,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 590,
        settings: {
          centerPadding: "40px",
          slidesPerRow: 2,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 530,
        settings: {
          centerPadding: "90px",
          slidesPerRow: 1,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 440,
        settings: {
          centerPadding: "70px",
          slidesPerRow: 1,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          centerPadding: "40px",
          slidesPerRow: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {showModal ? (
        <React.Fragment>
          <div onClick={() => setShowmodal(false)} className="teamOverlay">
            <div className="teamOverlayOuter">
              <div
                onClick={(e) => e.stopPropagation()}
                className="teamOverlayModal"
              >
                <div
                  onClick={() => {
                    setShowmodal(false);
                    setisActive(false);
                    setisActive1(false);
                    setIsActive2(false);
                    setIsActive3(false);
                    setIsActive4(false);
                    setIsActive5(false);
                    setIsActive6(false);
                    setIsActive7(false);
                    setIsActive8(false);
                  }}
                  className="teamOverlayModalCross"
                >
                  <i class="fa-solid fa-x"></i>
                </div>
                <div className="teamOverlayModalLeft">
                  <img src={tImg} />
                </div>
                <div className="teamOverlayModalRight">
                  <div className="teamOverlayModalRight1">{tname}</div>
                  <div className="teamOverlayModalRight2">{tlo}</div>
                  <div className="teamOverlayModalRight3">{tdesc}</div>
                  <a
                    target="_blank"
                    href={tlink}
                    className="teamOverlayModalRight4"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : null}
      <div
        className={showModal ? "bodyWrapper bodyWrapperBlured" : "bodyWrapper"}
      >
        <div className="section section4">
          <div className="sectionWrapper">
            <div className="sectionSmallTitle">MEET THE TEAM</div>
            <div className="sectionBigTitle">Ready to change the world</div>
            <div className="section3text">
              A super diverse team of talented people known to get things done.
              We have people from all around the globe with a common goal, to
              make Web 3.0 accessible to all.
            </div>

            <div className="section4itemsWrapper web__view ">
              <div
                onClick={() => setTeam(0)}
                className={isActive ? "view1" : "section4item"}
              >
                <div className="section4itemImage section4itemImage1">
                  <img src={t1} />
                </div>
                <div className="section4itemName">HARIS HUSSAIN</div>
                <div className="section4itemHint">FOUNDER & CEO</div>
              </div>

              <div
                onClick={() => setTeam(1)}
                className={isActive1 ? "view2" : "section4item2"}
              >
                <div className="section4itemImage section4itemImage2">
                  <img src={t2} />
                </div>
                <div className="section4itemName">BABAR ALI</div>
                <div className="section4itemHint">CO-FOUNDER</div>
              </div>

              <div
                onClick={() => setTeam(2)}
                className={isActive2 ? "view3" : "section4item2"}
              >
                <div className="section4itemImage section4itemImage3">
                  <img src={t3} />
                </div>
                <div className="section4itemName">ASLIHAN SARIGÜL</div>
                <div className="section4itemHint">CONCEPT DEVELOPER</div>
              </div>

              <div
                onClick={() => setTeam(3)}
                className={isActive3 ? "view4" : "section4item2"}
              >
                <div className="section4itemImage section4itemImage4">
                  <img src={t4} />
                </div>
                <div className="section4itemName">DAVID TUNOLD</div>
                <div className="section4itemHint">TALENT MANAGER</div>
              </div>

              <div className="teamSpacer"></div>

              <div
                onClick={() => setTeam(4)}
                className={isActive4 ? "view5" : "section4item"}
              >
                <div className="section4itemImage section4itemImage5">
                  <img src={t5} />
                </div>
                <div className="section4itemName">MOHSIN BASHIR</div>
                <div className="section4itemHint">ACCOUNTS & FINANCE</div>
              </div>

              <div
                onClick={() => setTeam(5)}
                className={isActive5 ? "view6" : "section4item"}
              >
                <div className="section4itemImage section4itemImage6">
                  <img src={t6} />
                </div>
                <div className="section4itemName">JAMES OOI</div>
                <div className="section4itemHint">COMMUNITY MANAGER</div>
              </div>

              <div
                onClick={() => setTeam(6)}
                className={isActive6 ? "view7" : "section4item"}
              >
                <div className="section4itemImage section4itemImage7">
                  <img src={t7} />
                </div>
                <div className="section4itemName">SHRUTI KOHLI</div>
                <div className="section4itemHint">PARTNERSHIP ADVISOR</div>
              </div>

              <div
                onClick={() => setTeam(7)}
                className={isActive7 ? "view8" : "section4item"}
              >
                <div className="section4itemImage section4itemImage8">
                  <img src={t8} />
                </div>
                <div className="section4itemName">KARIN VERI</div>
                <div className="section4itemHint">PARTNERSHIP ADVISOR</div>
              </div>

              <div
                onClick={() => setTeam(8)}
                className={isActive8 ? "view9" : "section4item"}
              >
                <div className="section4itemImage section4itemImage9">
                  <img src={t9} />
                </div>
                <div className="section4itemName">VALERIE LEROY</div>
                <div className="section4itemHint">BUSINESS ADVISOR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team_slider">
        <div>
          <Slider {...settings}>
            <div className="inner_slider">
              <div onClick={() => setTeam(0)} className="section4item">
                <div className="section4itemImage section4itemImage1">
                  <img src={t1} />
                </div>
                <div className="section4itemName">HARIS HUSSAIN</div>
                <div className="section4itemHint">FOUNDER & CEO</div>
              </div>
              <div onClick={() => setTeam(2)} className="section4item">
                <div className="section4itemImage section4itemImage3">
                  <img src={t3} />
                </div>
                <div className="section4itemName">ASLIHAN SARIGÜL</div>
                <div className="section4itemHint">CONCEPT DEVELOPER</div>
              </div>
            </div>
            <div className="inner_slider">
              <div onClick={() => setTeam(3)} className="section4item">
                <div className="section4itemImage section4itemImage4">
                  <img src={t4} />
                </div>
                <div className="section4itemName">DAVID TUNOLD</div>
                <div className="section4itemHint">TALENT MANAGER</div>
              </div>
              <div onClick={() => setTeam(4)} className="section4item">
                <div className="section4itemImage section4itemImage5">
                  <img src={t5} />
                </div>
                <div className="section4itemName">MOHSIN BASHIR</div>
                <div className="section4itemHint">ACCOUNTS & FINANCE</div>
              </div>
            </div>
            <div className="inner_slider">
              <div onClick={() => setTeam(5)} className="section4item">
                <div className="section4itemImage section4itemImage6">
                  <img src={t6} />
                </div>
                <div className="section4itemName">JAMES OOI</div>
                <div className="section4itemHint">COMMUNITY MANAGER</div>
              </div>
              <div onClick={() => setTeam(6)} className="section4item">
                <div className="section4itemImage section4itemImage7">
                  <img src={t7} />
                </div>
                <div className="section4itemName">SHRUTI KOHLI</div>
                <div className="section4itemHint">PARTNERSHIP ADVISOR</div>
              </div>
            </div>
            <div className="inner_slider">
              <div onClick={() => setTeam(7)} className="section4item">
                <div className="section4itemImage section4itemImage8">
                  <img src={t8} />
                </div>
                <div className="section4itemName">KARIN VERI</div>
                <div className="section4itemHint">PARTNERSHIP ADVISOR</div>
              </div>
              <div onClick={() => setTeam(8)} className="section4item">
                <div className="section4itemImage section4itemImage9">
                  <img src={t9} />
                </div>
                <div className="section4itemName">VALERIE LEROY</div>
                <div className="section4itemHint">BUSINESS ADVISOR</div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Section04;
