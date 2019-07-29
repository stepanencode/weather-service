import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import ButtonLogIn from "../../shared/Buttons/ButtonLogIn";

let LogInForm = props => {

    const { handleSubmit } = props;

    return (
        <div className="mx-auto w-50">
            <FormGroup>
            <Form onSubmit={handleSubmit}>
                <div className="mt-3">
                    <Label htmlFor="email">Email</Label>
                    <Input placeholder="email">
                        <Field name="email" component="input" type="email" />
                    </Input>
                </div>
                <div className="mt-3">
                    <Label htmlFor="password">Password</Label>
                    <Input placeholder="password">
                      <Field name="password" component="input" type="password" />
                    </Input>
                </div>
                <ButtonLogIn />
            </Form>
            </FormGroup>
        </div>
    )
};

LogInForm = reduxForm({
    form: 'LogInForm'

})(LogInForm);

export default LogInForm;

