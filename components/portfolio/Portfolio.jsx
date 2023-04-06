import React, { useState } from "react";
import "./Portfolio.css";
import UI1 from "../../assets/SET-1920x1080.png";
import UI2 from "../../assets/SceneBedtime-stories.png";
import UI3 from "../../assets/Mockup.png";
import UI4 from "../../assets/misty-tea.jpg";
import UI5 from "../../assets/Aquatis.jpg";
import UI6 from "../../assets/LENNER.jpg";
import UI7 from "../../assets/Vaschovatel.jpg";
import UI8 from "../../assets/casopis.jpg";
import UI9 from "../../assets/NEW_OKTAGON.png";
import UI10 from "../../assets/16-6.png";

const Portfolio = () => {
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage4, setShowImage4] = useState(false);
  const [showImage5, setShowImage5] = useState(false);

  function showPopup1() {
    setShowImage1(true);
  }
  function hidePopup1() {
    setShowImage1(false);
  }
  function showPopup2() {
    setShowImage2(true);
  }
  function hidePopup2() {
    setShowImage2(false);
  }
  function showPopup3() {
    setShowImage3(true);
  }
  function hidePopup3() {
    setShowImage3(false);
  }
  function showPopup4() {
    setShowImage4(true);
  }
  function hidePopup4() {
    setShowImage4(false);
  }
  function showPopup5() {
    setShowImage5(true);
  }
  function hidePopup5() {
    setShowImage5(false);
  }

  return (
    <section id="portfolio">
      <h5>Co Dělám?</h5>
      <h2>Nejlepší projekty</h2>
      <p>
        Vybral jsem příklady těch nejzajímavějších projektů, na kterých jsem
        pracoval. Jsou z mé práce na volné noze i z práce pro firmy Alistra a
        Smart Connections.
      </p>

      <div className="container portfolio__container">
        <article className="portfolio">
          <div className="portfolio-grid">
            <div className="portfolio__image">
              <img src={UI1} alt="UI1" onClick={showPopup1} />
              <div className="portfolio__title">
                <h2>
                  SMARTY_<br></br>E-Commerce<span class="dot__small">.</span>
                </h2>
              </div>
            </div>

            {/* Popup image element */}
            {showImage1 && (
              <div className="popup__container" onClick={hidePopup1}>
                <div className="popup" onClick={hidePopup1}>
                  <div className="text__popup">Kliknutím zavřete</div>
                  <img src={UI1} alt="UI1" />
                </div>
              </div>
            )}

            <div className="portfolio__image">
              <img src={UI2} alt="UI2" onClick={showPopup2} />
              <div className="portfolio__title">
                <h2>
                  BEDTIME_<br></br>Stories<span class="dot__small">.</span>
                </h2>
              </div>
            </div>

            {/* Popup image element */}
            {showImage2 && (
              <div className="popup__container" onClick={hidePopup2}>
                <div className="popup" onClick={hidePopup2}>
                  <div className="text__popup">Kliknutím zavřete</div>
                  <img src={UI2} alt="UI2" />
                </div>
              </div>
            )}

            <a href="https://www.svetprumyslu.cz" target="_blank">
              <div className="portfolio__image">
                <img src={UI3} alt="UI3" />
                <div className="portfolio__title">
                  <h2>
                    SVĚT_<br></br>Průmyslu<span class="dot__small">.</span>
                  </h2>
                </div>
              </div>
            </a>

            <div className="portfolio__image">
              <img src={UI4} alt="UI4" onClick={showPopup3} />
              <div className="portfolio__title">
                <h2>
                  Misty_<br></br>Tea<span class="dot__small">.</span>
                </h2>
              </div>
            </div>

            {/* Popup image element */}
            {showImage3 && (
              <div className="popup__container" onClick={hidePopup3}>
                <div className="popup" onClick={hidePopup3}>
                  <div className="text__popup">Kliknutím zavřete</div>
                  <img src={UI4} alt="UI4" />
                </div>
              </div>
            )}

            <div className="portfolio__image">
              <img src={UI5} alt="UI5" onClick={showPopup4} />
              <div className="portfolio__title">
                <h2>
                  Aquatis_<br></br>Bottle<span class="dot__small">.</span>
                </h2>
              </div>
            </div>

            {/* Popup image element */}
            {showImage4 && (
              <div className="popup__container" onClick={hidePopup4}>
                <div className="popup" onClick={hidePopup4}>
                  <div className="text__popup">Kliknutím zavřete</div>
                  <img src={UI5} alt="UI5" />
                </div>
              </div>
            )}

            <a
              href="https://www.youtube.com/playlist?list=PLBFTuzRT3jqoPh7quvnPeriV6k_M-QMfH"
              target="_blank"
            >
              <div className="portfolio__image">
                <img src={UI6} alt="UI1" />
                <div className="portfolio__title">
                  <h2>
                    Lenner_<br></br>Motors<span class="dot__small">.</span>
                  </h2>
                </div>
              </div>
            </a>

            <a
              href="https://www.youtube.com/watch?v=f7SPP7piyCk"
              target="_blank"
            >
              <div className="portfolio__image">
                <img src={UI7} alt="UI1" />
                <div className="portfolio__title">
                  <h2>
                    Váš_<br></br>Chovatel<span class="dot__small">.</span>
                  </h2>
                </div>
              </div>
            </a>

            <a
              href="https://www.svetprumyslu.cz/archiv-digitalnich-casopisu/"
              target="_blank"
            >
              <div className="portfolio__image">
                <img src={UI8} alt="UI1" />
                <div className="portfolio__title">
                  <h2>
                    Magazin_<br></br>Svět Průmyslu
                    <span class="dot__small">.</span>
                  </h2>
                </div>
              </div>
            </a>
            <div className="portfolio__image">
              <img src={UI9} alt="UI9" onClick={showPopup5} />
              <div className="portfolio__title">
                <h2>
                  NEW_
                  <br />
                  OKTAGON<span className="dot__small">.</span>
                </h2>
              </div>
            </div>
          </div>
        </article>
      </div>
      {/* Popup image element */}
      {showImage5 && (
        <div className="popup__container" onClick={hidePopup5}>
          <div className="popup" onClick={hidePopup5}>
            <div className="text__popup">Kliknutím zavřete</div>
            <img src={UI9} alt="UI9" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
