import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form, FormGroup, Label } from "reactstrap";

import {FieldInput} from "../../shared/Input/FieldInput";
import {validate} from "../../shared/Input/FieldInput";

let SignUpForm = ({ handleSubmit}) => {

    return (
        <div className="mx-auto w-50">
            <FormGroup>
                <Form onSubmit={handleSubmit}>
                    <div className="mt-3">
                        <Label htmlFor="username">
                            Username
                        </Label>
                        <Field
                            name="username"
                            component={FieldInput}
                            type="text"
                            autoFocus={true}
                            placeholder="username"
                        />
                    </div>
                    <div className="mt-3">
                        <Label htmlFor="email">
                            Email
                        </Label>
                        <Field
                            name="email"
                            component={FieldInput}
                            type="email"
                            placeholder="email"
                        />
                    </div>
                    <div className="mt-3">
                        <Label htmlFor="password">
                            Password
                        </Label>
                        <Field
                            name="password"
                            component={FieldInput}
                            type="password"
                            placeholder="password"
                        />
                    </div>
                    <div className="mt-3">
                        <Label htmlFor="confirm_password">
                            Confirm Password
                        </Label>
                        <Field
                            name="confirm_password"
                            component={FieldInput}
                            type="password"
                            placeholder="password"
                        />
                    </div>
                    <Button
                        type="submit"
                        color="warning"
                        className="mt-3"
                    >
                        Register
                    </Button>
                </Form>
            </FormGroup>
        </div>
    )
};

SignUpForm = reduxForm({
    form: 'SignUpForm',
    validate
})(SignUpForm);

export default SignUpForm;
