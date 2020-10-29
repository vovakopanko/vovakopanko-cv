import React from "react";
import style from "./Personality.module.css";

export const Personality = (props) => {
  return (
    <div className={style.profile__description}>
        <div>
          Responsible
        </div>
        <div>
          Active
        </div>
        <div>
          Communicative
        </div>
        <div>
          Organized
        </div>
        <div>
          High learning ability
        </div>
    </div>
  );
};
