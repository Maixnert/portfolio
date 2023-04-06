import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs"
import { GiSpiderWeb } from "react-icons/gi"
import { BiPaint } from "react-icons/bi"
import { RiAdvertisementFill } from "react-icons/ri"



const Services = () => {
  return (
    <section id="services">
      <h5>Co Dělám?</h5>
      <h2>Služby, které nabízím</h2>
      <p>
        Mám široké zkušenosti z oblastí tvorby obsahu, web designu, web developmentu, správy webů i digitálního marketingu.
      </p>

      <div className="container services__container">
        <article className="service">
        <div className="service__content">
          <div className="service__cards">
            <article className="service__card">
              <BsPencilSquare className="service__icon"/>
              <h5>UI/UX Design<span class="dot__small">.</span></h5>
              <small>Design uživatelského prostředí i zážitku je pro mě důležitá součást práce. Dělám  ji i samostatně, častěji však v kombinaci s vývojem webu.</small>
            </article>
            <article className="service__card">
            <GiSpiderWeb className="service__icon"/>
              <h5>Web Development<span class="dot__small">.</span></h5>
              <small>Tvořím weby, které mají funkční i vizuální hodnotu. Od CMS redakčních systémů po malé microsites</small>
            </article>
            <article className="service__card">
            <BiPaint className="service__icon"/>
              <h5>Content Creation<span class="dot__small">.</span></h5>
              <small>Dělám digitální grafiku, DTP, 3D, fotografie i video. Vše s největší pečlivostí a maximálním smyslem pro detail</small>
            </article>
            <article className="service__card">
            <RiAdvertisementFill className="service__icon"/>
              <h5>Digitální Marketing<span class="dot__small">.</span></h5>
              <small>Newslettery, reklamní kampaně, sociální sítě s tím vším vám mohu pomoci. </small>
            </article>
          </div>

          </div>
          

        </article>

        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
