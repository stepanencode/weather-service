import React, { Component } from "react";
import  { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

// import ButtonSignUpLink from "../../shared/Buttons/ButtonSignUpLink"
import LogInForm from "./LogInForm";
import { submitLogin } from '../../actions/auth.thunk';
import { Button } from "reactstrap";

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
                        <Button type="button" color="warning" className="mt-3">Register</Button>
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
