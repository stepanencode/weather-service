import React from 'react';
import history from '../../history'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Button,
} from 'reactstrap';

// import ButtonLogOut from "../Buttons/ButtonLogOut";


class Header extends React.Component {

    state = { isOpen: false  };

    componentDidMount() {
        this.toggle();
    }

    logOut = () => {
        localStorage.removeItem('token');
        history.push('/login');
    };

    toggle = () => {
            this.setState({
                isOpen: !this.state.isOpen
            });
        };

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md" >
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar >
                            <NavItem className="mt-2 m-auto">
                                <NavLink href="/">
                                    LogIn
                                </NavLink>
                            </NavItem>
                            <NavItem className="mt-2 m-auto">
                                <NavLink href="/sign_up">
                                    SignUp
                                </NavLink>
                            </NavItem>
                            <NavItem className="mt-2 m-auto">
                                <NavLink href="/edit_profile">
                                    Edit Profile
                                </NavLink>
                            </NavItem>
                            <NavItem className="mt-2 m-auto">
                                <NavLink href="/weather">
                                    Weather Page
                                </NavLink>
                            </NavItem>
                            <NavItem className="mt-2 m-auto">
                                <NavLink href="/history_list">
                                    History List
                                </NavLink>
                            </NavItem>
                            <NavItem className="mt-2 m-auto">
                                <NavLink href="/history_details">
                                    History Details
                                </NavLink>
                            </NavItem>
                            <NavItem className="m-auto">
                                <Button color="danger" onClick={this.logOut}>
                                    LogOut
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;

