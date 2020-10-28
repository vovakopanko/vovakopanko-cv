import React from "react";
import { Field } from "redux-form";

const CreateField = (type, component, name, placeholder) => {
  return (
    <Field
      type={type}
      component={component}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default CreateField;