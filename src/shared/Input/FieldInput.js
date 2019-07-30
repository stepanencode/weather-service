import React from "react";
import {Input} from "reactstrap";

const FieldInput =  ({ input, type, placeholder }) => {
    return (
        <Input {...input} placeholder={placeholder} type={type} />
    )
};

export default FieldInput;