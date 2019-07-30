import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import ButtonLogInLink from "../../shared/Buttons/ButtonLogInLink";
import SignUpForm from "./SignUpForm";


class SignUp extends Component {
    submit = values => {
        console.log(values)
    };
    render() {
        return (
            <div>
                <div className="text-right mx-5">
                    <NavLink to="/">
                        <ButtonLogInLink />
                    </NavLink>
                </div>
                <SignUpForm onSubmit={this.submit}/>
            </div>
        )
    }
}

export default SignUp;

