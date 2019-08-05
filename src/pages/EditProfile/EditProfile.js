import React, { Component } from "react";
import  { connect } from "react-redux";
import { Button } from "reactstrap";

import { toggleProfileEdit } from "../../actions/profile.actions";
import { getProfile, submitProfile } from "../../actions/profile.thunk";
import EditProfileForm from "./EditProfileForm";

class EditProfile extends Component {

    componentDidMount() {
        this.props.getProfile();
    }

    submit = (values) => {
        console.log(values);
        this.props.submitProfile(values);
    };

    render() {
        return (
            (this.props.isEdited) ?
                <EditProfileForm onSubmit={this.submit} /> :
                (
                    <div className="container mt-5">
                        <div className="my-2">
                            <span>Email:</span>
                            <span>{this.props.user.email}</span>
                        </div>
                        <div className="my-2">
                            <span >Username:</span>
                            <span>{this.props.user.username}</span>
                        </div>
                        <div className="my-2">
                            <span>Password:</span>
                        </div>
                        <Button onClick={this.props.toggleProfileEdit}>Edit</Button>
                    </div>
                )
        )
    }
}

const mapStateToProps = state => {
    return {
        isEdited: state.profile.isEdited,
        user: state.profile.user
    };
};

export default connect(
    mapStateToProps, {
        toggleProfileEdit,
        getProfile,
        submitProfile
    })(EditProfile);
