import React from "react";
import style from "./Project.module.css";
import menu from "./../../images/menu.PNG";
import professionals from "./../../images/professionals.PNG";
import projects from "./../../images/projects.png";


let Project = (props) => {
  return (
    <div className={style.item__project}>
      <div className={style.project__block}>
        <span className={style.project__number}></span>
        <span className={style.project__title}>
          MY PROJECT
          <div className={style.project__title_underline}></div>
        </span>

        <span className={style.project__item_one}>
          <a
            href="https://vovakopanko.github.io/arh-design-social-network/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={menu} alt="menu" />
          </a>
        </span>
        <div className={style.project__description_one}>
          {/* Social NETWORK (MENU) */}
        </div>
        <span className={style.project__item_two}>
          <a
            href="https://vovakopanko.github.io/arh-design-social-network/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={professionals} alt="professionals" />
          </a>
        </span>
        <div className={style.project__description_two}>
          {/* Social NETWORK (Professionals) */}
        </div>
        <span className={style.project__item_three}>
          <a
            href="https://vovakopanko.github.io/arh-design-social-network/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={projects} alt="projects" />
          </a>
        </span>
        <div className={style.project__description_three}>
          {/* Social NETWORK (Project) */}
        </div>
      </div>
    </div>
  );
};

export default Project;
