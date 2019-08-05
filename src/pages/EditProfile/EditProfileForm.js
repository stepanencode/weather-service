import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Form, Label, Button } from 'reactstrap';
import { connect } from 'react-redux'

import {FieldInput} from "../../shared/Input/FieldInput";
import {validate} from "../../shared/Input/FieldInput";

let EditProfileForm = ({ handleSubmit, user}) => {

    return (
        <Form onSubmit={handleSubmit} className="container mt-5">
            <div className="my-2">
                <Label htmlFor="email">
                    Email:
                </Label>
                <span>
                    {user.email}
                </span>
            </div>
            <div className="my-2">
                <Label htmlFor="username">
                    Username:
                </Label>
                <Field
                    name="username"
                    component={FieldInput}
                    type="text"
                    autoFocus={true}
                    placeholder={user.username}
                />
            </div>
            <div className="my-2">
                <Label htmlFor="password">
                    Password:
                </Label>
                <Field
                    name="password"
                    component={FieldInput}
                    type="password"
                />
            </div>
            <Button type="submit">Save</Button>
        </Form>
    )
};

const mapStateToProps = state => {
    return {
        user: state.profile.user
    };
};

EditProfileForm = reduxForm({
    form: 'EditProfileForm',
    validate
})(EditProfileForm);

export default connect(mapStateToProps, null)(EditProfileForm);
