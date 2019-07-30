import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Label } from 'reactstrap';

import ButtonSignUp from "../../shared/Buttons/ButtonSignUp";
import FieldInput from "../../shared/Input/FieldInput";

let SignUpForm = ({ handleSubmit}) => {
    return (
        <div className="mx-auto w-50">
            <FormGroup>
                <Form onSubmit={handleSubmit}>
                    <div className="mt-3">
                        <Label htmlFor="email">Email</Label>
                        <Field name="email" component={FieldInput} type="email" autoFocus={true} placeholder="email"/>
                    </div>
                    <div className="mt-3">
                        <Label htmlFor="password">Password</Label>
                        <Field name="password" component={FieldInput} type="password" placeholder="password"/>
                    </div>
                    <div className="mt-3">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Field name="confirm-password" component={FieldInput} type="password" placeholder="password"/>
                    </div>
                    <ButtonSignUp />
                </Form>
            </FormGroup>
        </div>
    )
};

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;

