import React from "react";
import style from "./Education.module.css";

export const Education = (props) => {
  return (
    <div className={style.description__education}>
      <div className={style.education__date}>
        <div className={style.date__item}>2011 - 2016 </div>
        <div className={style.date__item}>june 2020 - september 2020 </div>
      </div>
      <div className={style.education__uneversity}>
        <div className={style.uneversity__item}>
          Polotsk State University
          <br />
          Faculty of Engineering and Technology
          <br />
          Mechanical Engineer Diploma
        </div>
        <div className={style.uneversity__item}>
          IT-INCUBATOR (ReactJS, Redux,Rest API, TypeScript) - youtube chanel
        </div>
      </div>
    </div>
  );
};
