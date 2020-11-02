import React from "react";
import { NavLink, Redirect, Route } from "react-router-dom";
import { Biography } from "../Biography/Biography";
import { Education } from "../Education/Education";
import { Experience } from "../Experience/Experience";
import { LanguageSkills } from "../LanguageSkills/LanguageSkills";
import { Personality } from "../Personality/Personality";
import { ProfSkills } from "../ProfSkills/ProfSkills";
import style from "./AboutMe.module.css";

let AboutMe = (props) => {
  return (
    <div className={style.content__block}>
      <div className={style.content__menu}>
        <span>
          <NavLink
            to="/aboutme/biography"
            activeClassName={style.menu__item_activeLink}
            className={style.menu__item}
          >
            My description
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/aboutme/experience"
            activeClassName={style.menu__item_activeLink}
            className={style.menu__item}
          >
            Experience
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/aboutme/education"
            activeClassName={style.menu__item_activeLink}
            className={style.menu__item}
          >
            Education
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/aboutme/profskills"
            activeClassName={style.menu__item_activeLink}
            className={style.menu__item}
          >
            Profile Skills
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/aboutme/langskills"
            activeClassName={style.menu__item_activeLink}
            className={style.menu__item}
          >
            Language Skills
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/aboutme/personality"
            activeClassName={style.menu__item_activeLink}
            className={style.menu__item}
          >
            Personality
          </NavLink>
        </span>
      </div>
      <div className={style.content__description}>
        <Route path="/aboutme/biography" render={() => <Biography />} />
        <Route path="/aboutme/experience" render={() => <Experience />} />
        <Route path="/aboutme/education" render={() => <Education />} />
        <Route path="/aboutme/langskills" render={() => <LanguageSkills />} />
        <Route path="/aboutme/personality" render={() => <Personality />} />
        <Route path="/aboutme/profskills" render={() => <ProfSkills />} />
        <Route
          exact
          path="/"
          render={() => <Redirect to="/aboutme/biography" />}
        />
      </div>
    </div>
  );
};

export default AboutMe;
