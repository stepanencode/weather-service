import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Label } from 'reactstrap';
// import {validate} from "../../shared/Input/FieldInput";
// import { connect } from 'react-redux';

import ButtonLogIn from "../../shared/Buttons/ButtonLogIn";
import {FieldInput} from "../../shared/Input/FieldInput";

// import { signInAction } from '../../actions';



let LogInForm = ({ handleSubmit, submitting }) => {

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
                <ButtonLogIn disabled={submitting}/>
            </Form>
            </FormGroup>
        </div>
    )
};

LogInForm = reduxForm({
    form: 'LogInForm',
    // validate
})(LogInForm);

export default LogInForm;

// export default connect(null, {signInAction})(LogInForm);

