import React from "react";
import { Redirect, Route } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import Project from "../Project/Project";
import style from "./Content.module.css";
import { FormContactRequest } from "./FormRequest";

let Content = (props) => {
  const sendRequest = () => {
    alert("Your request send, thenk's");
  };

  return (
    <div className={style.content}>
      <div className={style.content__title}>
        <div>
          <i className={style.content__name}>Uladzimir</i>
        </div>
        <div className={style.content__surname}>KOPANKO</div>
        <div className={style.content__specifical}>FRONTEND DEVELOPER</div>
      </div>
      <div className={style.content__block}>
        <div className={style.content__menu}>
          <Route path="/aboutme" render={() => <AboutMe />} />
          <Route path="/project" render={() => <Project />} />
          <Route exact path="/aboutme" render={() => <Redirect to="/aboutme/biography" />} />
        </div>
      </div>
      <div className={style.content__request}>HIRE ME</div>
      <FormContactRequest
        className={style.request__formBlock}
        onSubmit={() => {
          sendRequest();
        }}
      />
    </div>
  );
};

export default Content;
