import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

let Header = (props) => {
  return (
    <div className={style.header}>
      <div className={style.header__items}>
        <NavLink
          to="/aboutme"
          className={style.header__item}
          activeClassName={style.header__item_activeLink}
        >
          About ME
        </NavLink>
        <NavLink to="/project" activeClassName={style.header__item_activeLink}>
          Project
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
