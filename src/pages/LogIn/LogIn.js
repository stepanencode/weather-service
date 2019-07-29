import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import ButtonSignUpLink from "../../shared/Buttons/ButtonSignUpLink"
import LogInForm from "./LogInForm";


class LogIn extends Component {
    submit = values => {
        // print the form values to the console
        console.log(values)
    };
    render() {
        return (
            <div>
                <div className="text-right mx-5">
                <NavLink to="/sign_up">
                    <ButtonSignUpLink />
                </NavLink>
                </div>
            <LogInForm onSubmit={this.submit}/>
            </div>
            )
    }
}

export default LogIn;

