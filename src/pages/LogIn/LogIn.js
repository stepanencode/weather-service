import React, { Component } from "react";
import  { connect } from 'react-redux';
import {NavLink} from "react-router-dom";
import ButtonSignUpLink from "../../shared/Buttons/ButtonSignUpLink"
import LogInForm from "./LogInForm";
import { submitLogin } from '../../actions/auth.thunk';


class LogIn extends Component {
    submit = values => {
        console.log(values);
        this.props.submitLogin(values);
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



export default connect(null, {
    submitLogin
})(LogIn);
