import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/headerLogo.png";
import { contentCreate } from "../../context/reducer/UseReducer";
import responsivemenuicon from "../../assets/images/responsive-menu.svg";
import responsivemenuclose from "../../assets/images/responsive-colse.svg";
const Header = () => {
  const [offset, setOffset] = useState(0);
  const data = useContext(contentCreate);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggleMenu = () => {
    data.dispatch({ type: "TOGGLE" });
  };
  return (
    <>
      <header
        className={offset === 0 ? "newHeader " : "newHeader newHeaderTra"}
      >
        <div className="headerWrapper">
          <div
            className="header"
            style={{
              paddingTop: offset === 0 ? "20px " : "0",
            }}
          >
            <Link
              to="/"
              className={
                offset === 0 ? "headerLogo" : "headerLogo header--logo--sticky"
              }
            >
              <img src={logo} alt="" />
            </Link>
            <div className="headerMenu">
              <NavLink
                to="/"
                className="headerMenuSmallButton headerMenuSmallButtonActive"
              >
                INTRODUCTION <span className="spanlinebar"></span>
              </NavLink>

              <NavLink to="pitch-deck" className="headerMenuSmallButton">
                PITCH DECK <span className="spanlinebar"></span>
              </NavLink>

              <Link
                to="pre-seed"
                className="headerMenuBigButton headerMenuBigButton1"
              >
                PRE-SEED SALE
              </Link>
              {/* <div
              to="connect-wallet"
              className="headerMenuBigButton headerMenuBigButton2"
              onClick={() => {
                console.log("ss");
              }}
            >
              CONNECT WALLET
            </div> */}
              {/* <div className="headerMenuBigButton headerMenuBigButton2">
              CONNECT WALLET
            </div> */}
            </div>
            <div
              className="menu--responsive--section"
              style={{
                marginTop: offset === 0 ? "-25px" : null,
              }}
            >
              <img
                src={responsivemenuicon}
                alt="responsivemenu"
                onClick={handleToggleMenu}
              />
            </div>
          </div>
        </div>
      </header>
      <div
        className={
          data.state.menuToggle
            ? "responsive--menu "
            : " responsive--menu hidden "
        }
      >
        <div className="header---section--top">
          <NavLink>
            <img
              src={logo}
              alt=""
              className="logo--img"
              onClick={handleToggleMenu}
            />
          </NavLink>
          <div className="close--menu--button">
            <span>
              <img
                src={responsivemenuclose}
                alt=""
                onClick={handleToggleMenu}
              />
            </span>
          </div>
        </div>
        <div className="mobile--resposive">
          <ul>
            <li>
              <NavLink
                to="introduction"
                className="headerMenuSmallButton headerMenuSmallButtonActive"
                onClick={handleToggleMenu}
              >
                INTRODUCTION <span className="spanlinebar"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="pitch-deck"
                className="headerMenuSmallButton"
                onClick={handleToggleMenu}
              >
                PITCH DECK <span className="spanlinebar"></span>
              </NavLink>
            </li>
            <li>
              <Link
                to="pre-seed"
                className="headerMenuBigButton headerMenuBigButton1"
                onClick={handleToggleMenu}
              >
                PRE-SEED SALE
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
