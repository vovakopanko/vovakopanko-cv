import React from "react";
import style from "./Experience.module.css";

export const Experience = (props) => {
  return (
    <div className={style.description__work}>
      <div className={style.work__date}>
        <div className={style.date__item}>2016 - 2019 </div>
        <div className={style.date__item}>2019 - 2020 </div>
        <div className={style.date__item}>2020 - now </div>
      </div>
      <div className={style.work__specifical}>
        <div className={style.specifical__item}>ENGINEER - Public corporation <b>"NAFTAN"</b></div>
        <div className={style.specifical__item}>PROJECT MANAGER - <b>OOO CROSSLINE</b></div>
        <div className={style.specifical__item}>PRODUCTION EQUIPMENT ENGINEER - <b>UNIX ENGINEERING</b></div>
      </div>
    </div>
  );
};
