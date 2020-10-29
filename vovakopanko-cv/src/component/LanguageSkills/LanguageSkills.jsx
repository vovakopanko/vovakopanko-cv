import React from "react";
import style from "./LanguageSkills.module.css";
import star3 from "./../../images/star3.png";
import star5 from "./../../images/star5.png";

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
          <img src={star3} alt="star" />
        </div>
        <div>
          <img src={star5} alt="star" />
        </div>
        <div>
          <img src={star5} alt="star" />
        </div>
      </div>
    </div>
  );
};
