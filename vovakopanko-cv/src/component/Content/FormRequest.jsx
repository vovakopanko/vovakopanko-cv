import React from "react";
import { reduxForm } from "redux-form";
import { InputField, Textarea } from "./../common/FormsControls";
import style from "./Content.module.css";
import CreateField from "./../../validators/validators"

const ContactRequest = ({ handleSubmit }) => {
  return (
    <div className={style.request__formBlock}>
       <form onSubmit={handleSubmit}>
        <div>{CreateField("text", InputField, "Name", "Name:")}</div>
        <div>
          {CreateField("text", InputField, "Contact", "Contact:")}
        </div>
        <div className={style.form__textArea}>
          {CreateField(
            "textarea",
            Textarea,
            "Request",
            "Your Request:"
          )}
        </div>
        <div>
          <button>Отправить</button>
        </div>
      </form>
    </div>
  );
};

export const FormContactRequest = reduxForm({ form: "sendRequest" })(
  ContactRequest
);
