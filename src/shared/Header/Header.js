import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { Button } from 'reactstrap';


export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle () {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md" >
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar >
                            <NavItem className="mt-2 m-auto">
                                <NavLink href="/">LogIn</NavLink>
                            </NavItem>
                            <NavItem className="mt-2 m-auto">
                                <NavLink href="/sign_up">SignUp</NavLink>
                            </NavItem>
                            <NavItem className="mt-2 m-auto">
                                <NavLink href="/edit_profile">Edit Profile</NavLink>
                            </NavItem>
                            <NavItem className="mt-2 m-auto">
                                <NavLink href="/weather">Weather Page</NavLink>
                            </NavItem>
                            <NavItem className="mt-2 m-auto">
                                <NavLink href="/history_list">History List</NavLink>
                            </NavItem>
                            <NavItem className="mt-2 m-auto">
                                <NavLink href="/history_details">History Details</NavLink>
                            </NavItem>
                            <NavItem className="m-auto">
                                <NavLink href="/"><Button color="danger">LogOut</Button></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

