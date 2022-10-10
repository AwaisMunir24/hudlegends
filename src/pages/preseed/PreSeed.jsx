import React, { useContext } from "react";
import "./PreSeed.css";
import clock from "../../assets/images/icon_legend.png";
import downarrow from "../../assets/images/icon_arrow.png";
import binance from "../../assets/images/binance.png";
import ProviderPopup from "../../components/Provider/ProviderPopup";
import { contentCreate } from "../../context/reducer/UseReducer";
import { Link } from "react-router-dom";
const PreSeed = () => {
  const data = useContext(contentCreate);
  const hanldeProvider = () => {
    // VALLLAT
    data.dispatch({
      type: "VALLLAT",
    });
    console.log(data.state.vallatPopoup);
  };
  return (
    <>
      {data.state.vallatPopoup && (
        <ProviderPopup hanldeProvider={hanldeProvider} />
      )}
      <section className="background_first_sale">
        <section className="join_sale">
          <div className="main_join_sale_wrapper">
            <div className="top_join">
              <div className="left_top">
                <h5>Join the first ever sale</h5>
              </div>
              <div className="right_top">
                {/* <button>get wishlisted</button> */}
              </div>
            </div>
            <div className="second_section_para">
              <p>
                Join the future of talent in the world of Web 3.0, backed by
                economic principles of value creation, Hood Legends is the most
                fair and transparent platform for talent based on blockchain.
              </p>
            </div>
            <div className="third_section_wrapper">
              <div className="third_section_left_side">
                <div className="from_">
                  <div className="left_from">
                    <h6>From</h6>
                    <p>3000</p>
                  </div>
                  <div className="left_from_name">
                    <h6>METAMASK</h6>
                    <div className="clock_secion">
                      <p>$BUSD</p>
                      <span>
                        <img src={binance} alt="clock" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="arrows">
                  <img src={downarrow} alt="arrow" />
                </div>
                <div className="to_">
                  <div className="left_to">
                    <h6>To</h6>
                    <p>120,000</p>
                  </div>
                  <div className="left_to_name">
                    <h6>Max allocation 320,000</h6>
                    <div className="clock_secion">
                      <p>$LEGENDS</p>
                      <span>
                        <img src={clock} alt="clock" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="fourth_">
                  {/* <button className="connet_wallet" onClick={hanldeProvider}> */}
                  <button className="connet_wallet" >
                    {/* Connect Wallet */}
                    Coming Soon
                  </button>
                </div>
              </div>
              <div className="third_section_right_side">
                <div className="token_info_wrapper">
                  <h5>Token Information</h5>
                  <div className="token_ticker">
                    <p>Token Ticker</p>
                    <p>Legend</p>
                  </div>
                  <div className="preseed">
                    <p>Pre-Seed Price</p>
                    <p>$0.025</p>
                  </div>
                  <div className="supply">
                    <p>Maximum Supply</p>
                    <p>1,000,000,000</p>
                  </div>
                  <div className="utils">
                    <p>Utility</p>
                    <button>Click Here</button>
                  </div>
                  <div className="token_para">
                    <p>
                      Pre-Seed tokens are vested over 10 months. 5% released
                      every 15 days starting from 15th January, 2023.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="container">
              <div className="skills html"></div>
              <div className="user_amount">
                <p>550,035 / 1,000,000 $LEGEND</p>
              </div>
            </div> */}
          </div>
        </section>
        <div className="back_arrow">
          <Link to="/">
            <i className="fa-sharp fa-solid fa-arrow-left"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PreSeed;
