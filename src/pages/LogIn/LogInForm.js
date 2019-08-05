import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Label, Button } from 'reactstrap';

import { FieldInput } from "../../shared/Input/FieldInput";

let LogInForm = ({ handleSubmit, submitting }) => {

    return (
        <div className="mx-auto w-50">
            <FormGroup>
                <Form onSubmit={handleSubmit}>
                    <div className="mt-3">
                        <Label htmlFor="email">
                            Email
                        </Label>
                        <Field
                            name="email"
                            component={FieldInput}
                            type="email"
                            autoFocus={true}
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
                    <Button
                        type="submit"
                        color="info"
                        className="mt-3"
                        disabled={submitting}
                    >
                        LogIn
                    </Button>
                </Form>
            </FormGroup>
        </div>
    )
};

LogInForm = reduxForm({
    form: 'LogInForm',
})(LogInForm);

export default LogInForm;


