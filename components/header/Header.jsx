import React from "react";
import "./Header.css";
import Logo from "../../assets/Logo (2).png";
import HeaderSocials from "./HeaderSocials";


const header = () => {
  return (

    <header>
      <HeaderSocials />
      <div className="container header__container">
        {/* <div className="top-text">
          <h1>CREA<br></br>TIVE</h1>
        </div> */}
        <div className="header__text">
          <h1>
            Jsem<br></br>Tomáš<span class="dot">.</span>
            <br></br>
          </h1>
          <p className="maixner">Maixner</p>
        </div>
      </div>
      <div className="logo__container__page">
        <div className="logo__container">
          <img className="logo" src={Logo} alt="" />
          <div className="text-light">
            <div className="container__text-light">
              <h1 className="first decoration__text-light">
                Grafický designer
              </h1>
            </div>
            <div className="container__text-light">
              <h1 className="second decoration__text-light">
                Tvorba webů</h1>
            </div>
            <div className="container__text-light">
              <h1 className="third decoration__text-light">
                Digitální marketing
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container__leftbar">
        <HeaderSocials />
      </div>
    </header>
  );
};

export default header;
