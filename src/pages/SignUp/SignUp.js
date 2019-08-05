import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';

// import ButtonLogInLink from "../../shared/Buttons/ButtonLogInLink";
import SignUpForm from "./SignUpForm";
import { submitRegister } from '../../actions/auth.thunk';
import { Button } from "reactstrap";

class SignUp extends Component {

    submit = values => {
        console.log(values);
        this.props.submitRegister(values);
    };

    render() {
        return (
            <div>
                <div className="text-right mx-5">
                    <NavLink to="/">
                        <Button
                            type="button"
                            color="info"
                            className="mt-3"
                        >
                            LogIn
                        </Button>
                    </NavLink>
                </div>
                <SignUpForm onSubmit={this.submit}/>
            </div>
        )
    }
}

export default connect(null, { submitRegister })(SignUp);
