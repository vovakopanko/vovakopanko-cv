import React from "react";
import style from "./LanguageSkills.module.css";
import star from "./../../images/star_gold.png";
import starNull from "./../../images/star.png";

export const LanguageSkills = (props) => {
  return (
    <div className={style.description__skill}>
      <div className={style.skill__language}>
        <div>English</div>
        <div>Russian</div>
        <div>Belarusian</div>
      </div>
      <div className={style.skill__stars}>
        <div>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={starNull} alt="star" />
          <img src={starNull} alt="star" />
        </div>
        <div>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
        <div>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
      </div>
    </div>
  );
};
