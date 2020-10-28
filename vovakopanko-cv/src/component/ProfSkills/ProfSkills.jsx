import React from "react";
import style from "./ProfSkills.module.css";
import star from "./../../images/star_gold.png";
import starNull from "./../../images/star.png";

export const ProfSkills = (props) => {
  return (
    <div className={style.description__skill}>
      <div className={style.skill_item}>
        <div>JavaScript</div>
        <div>ReactJS</div>
        <div>Redux</div>
        <div>RestAPI,CRUD,AJAX</div>
        <div>Git / GitHub </div>
        <div>HTML/CSS</div>
        <div>PHP</div>
        <div>TypeScript</div>
        <div>NodeJS(elementary)</div>
      </div>
      <div className={style.skill__star}>
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
          <img src={starNull} alt="star" />
        </div>
        <div>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={starNull} alt="star" />
        </div>
        <div>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={starNull} alt="star" />
        </div>
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
          <img src={starNull} alt="star" />
          <img src={starNull} alt="star" />
          <img src={starNull} alt="star" />
        </div>
        <div>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={starNull} alt="star" />
          <img src={starNull} alt="star" />
        </div>
      </div>
    </div>
  );
};
