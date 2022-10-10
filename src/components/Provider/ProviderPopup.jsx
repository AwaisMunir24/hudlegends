import React from "react";
import metamask from "../../assets/images/matamask.png";
import walletcollect from "../../assets/images/walletconnect.png";
import "./ProviderPopup.css";
const ProviderPopup = ({ hanldeProvider }) => {
  return (
    <>
      {/* "react-router-dom": "^5.2.0", */}
      {/* <div className="ProviderPopup---option--overlay"></div> */}
      <div className="ProviderPopup---option">
        <div className="ProviderPopup">
          <span
            className="icon--close--sidebar"
            onClick={() => hanldeProvider()}
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
          <h3 className="provider--title">Select your provider</h3>
          <div className="provider--companies">
            <div className="pro--comp--left">
              <div className="com--img">
                <img src={metamask} alt="metamask" />
              </div>
              <h3>METAMASK</h3>
              <p>Connect with your Metamask wallet</p>
            </div>
            <div className="pro--comp--right">
              <div className="com--img">
                <img src={walletcollect} alt="walletcollect" />
              </div>
              <h3>WALLETCONNECT</h3>
              <p>Scan with WalletConnect to connect</p>
            </div>
          </div>
          {/* <div className="provider--companies---overlay"></div> */}
        </div>
      </div>
    </>
  );
};

export default ProviderPopup;
