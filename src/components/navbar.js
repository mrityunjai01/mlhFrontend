import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import { userLogout } from '../reducers/userSlice';
import Button from 'react-bootstrap/Button'
class NavigationBar extends Component {
    render() {
        const userLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item me-2 mt-2">
                    Hello, {this.props.authenticatedUsername}
                </li>
                <li className="nav-item me-2 ml-2">
                    <Button variant = "primary" onClick = {this.props.userLogout} >Logout</Button>
                </li>
            </ul>
        );
        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item m-1">
                    <Button href = "/login" variant = "primary">Login</Button>
                </li>
                <li className="nav-item m-1">
                    <Button href = "/signup" variant = "primary">Sign up</Button>
                </li>
            </ul>
        );

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/" className="ms-3">Youtube Courses</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                    {this.props.isAuthenticated ? userLinks : guestLinks}
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.user.isAuthenticated,
        authenticatedUsername: state.user.email
    };
}

const mapDispatchToProps = dispatch => {
    return {
        userLogout: () => dispatch(userLogout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
