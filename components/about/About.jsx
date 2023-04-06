import React from "react";
import "./About.css";
import ME from "../../assets/Profile.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";




const About = () => {
  return (
    <section id="about">
      <h5>Něco</h5>
      <h2>O Mně</h2>

      <div className="container about__container">
      
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>

        </div>
  

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Zkušenosti</h5>
              <small> 5+ freelance<br />Práce v médiích<br></br>Práce v Reklamce</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Klienti</h5>
              <small> 30+ </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projekty</h5>
              <small>40+ Dokončených projektů</small>
            </article>
          </div>
          <p>
            Mám zkušenosti s tvorbou různých formátů. Dělal jsem videa, produktovou fotografii, grafický design a DTP. Momentálně se nejvíce soustředím na web design, web development a digitální marketing.
          </p>

          <a href="#contact" className="btn btn-primary">Kontaktujte mě</a>
        </div>
      </div>
    </section>
  );
};

export default About;
