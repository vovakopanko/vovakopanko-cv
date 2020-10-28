import React from "react";
import style from "./Footer.module.css";
import location from "./../../images/location.png";
import phone from "./../../images/phone.png";
import github from "./../../images/github.png";
import lin from "./../../images/lin.png";
import facebookIcon from "./../../images/facebookIcon.png";
import instagramIcon from "./../../images/instagramIcon.png";

let Footer = (props) => {
  return (
    <div className={style.footer}>
      <div className={style.footer__contact}>
        <span className={style.contact__location}>
          <img src={location} alt="checkmaps" />
          <i>Minsk, Belarus</i>
        </span>
        <span className={style.contact__phone}>
          <img src={phone} alt="phone" />
          <i>+375 33 902 91 91</i>
        </span>
      </div>
      <div className={style.footer__social}>
        <a
          href="https://www.instagram.com/vovakopanko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="photoInsta" />
        </a>
        <a
          href="https://ru-ru.facebook.com/vova.kopanko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="photoFacebook" />
        </a>
        <a
          href="https://www.linkedin.com/in/vladzimir-kopanko-37b451186"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={lin} alt="photoFacebook" />
        </a>
        <a
          href="https://github.com/vovakopanko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="photogitk"/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
