import React from "react";
import style from "./ProfSkills.module.css";
import star5 from "./../../images/star5.png";
import star4 from "./../../images/star4.png";
import star3 from "./../../images/star3.png";
import star2 from "./../../images/star2.png";

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
          <img src={star5} alt="star" />
        </div>
        <div>
          <img src={star5} alt="star" />
        </div>
        <div>
          <img src={star5} alt="star" />
        </div>
        <div>
          <img src={star4} alt="star" />
        </div>
        <div>
          <img src={star4} alt="star" />
        </div>
        <div>
          <img src={star4} alt="star" />
        </div>
        <div>
          <img src={star3} alt="star" />
        </div>
        <div>
          <img src={star2} alt="star" />
        </div>
        <div>
          <img src={star3} alt="star" />
        </div>
      </div>
    </div>
  );
};
