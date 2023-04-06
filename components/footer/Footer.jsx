import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FiDribbble } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import Logo from "../../assets/Logo (2).png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <img className="logo__footer" src={Logo} alt="" />
        <div className="name__container">
          <a href="#" className="footer__text">
            Tomáš Maixner
          </a>
          <div className="footer__copyright">
            <small>&copy; Tomáš Maixner</small>
            <div className="ico">
              <p>IČO: 07004389</p>
              <p>Nemile 89</p>
            </div>
          </div>
        </div>
      </div>

      <ul className="permalinks">
        <li>
          <a href="#">Domů</a>
        </li>
        <li>
          <a href="#">O Mě</a>
        </li>
        <li>
          <a href="#">Co nabízím</a>
        </li>
        <li>
          <a href="#">Nejlepší Projekty</a>
        </li>
        <li>
          <a href="#">Kontaktujte Mě</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-maixner-10485624a/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://www.facebook.com/maixnert/" target="_blank">
          <AiFillFacebook />
        </a>
        <a href="https://dribbble.com/msjor" target="_blank">
          <FiDribbble />
        </a>
        <a href="https://www.instagram.com/maixnert/" target="_blank">
          <AiOutlineInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
