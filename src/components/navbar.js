import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogout } from '../reducers/userSlice';

class NavigationBar extends Component {
    render() {
        const userLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-2 mt-2">
                    Hello, {this.props.authenticatedUsername}
                </li>
                <li className="nav-item">
                    <a className="btn btn-outline-primary" onClick={this.props.userLogout}>Logout</a>
                </li>
            </ul>
        );
        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-2">
                    <NavLink to="/login" className="btn btn-outline-primary">Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/signup" className="btn btn-primary">Signup</NavLink>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/'><h1 className="navbar-brand">Youtube Courses</h1></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavBar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="myNavBar">
                    {this.props.isAuthenticated ? userLinks : guestLinks}
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.user.isAuthenticated,
        authenticatedUsername: state.user.authenticatedUsername
    };
}

const mapDispatchToProps = dispatch => {
    return {
        userLogout: () => dispatch(userLogout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);