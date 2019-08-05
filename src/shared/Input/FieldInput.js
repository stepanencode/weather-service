import React from "react";
import { Input } from "reactstrap";

export const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = "This field is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }
    if (!values.password) {
        errors.password = "This field is required";
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.password)) {
        errors.password = "Minimum 8 characters, at least one letter, one number and one special character";
    }
    if (values.confirm_password !== values.password) {
        errors.confirm_password = "Incorrect password";
    }
    return errors;
};

export const FieldInput =  ({ input, type, placeholder, meta: { touched, error } }) => {
    return (
        <div>
          <Input {...input} placeholder={placeholder} type={type} />
          {touched && ((error && <span>{error}</span>))}
        </div>
    )
};
