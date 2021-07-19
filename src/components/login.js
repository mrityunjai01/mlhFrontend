import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { userLogin, userLoginThunk } from '../reducers/userSlice';

import InputField from './inputField';

const FIELDS = [
    {name: 'email', type: 'text', label: 'Email'},
    {name: 'password', type: 'password', label: 'Password'}
];

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userCredentials: {},
            errors: {}
        }
    }

    handleValidation = (field, value) => {
        let error = {};
        if (value === '') {
            error[field] = 'This field is required';
        } else {
            error[field] = '';
        }
        return error;
    }

    handleInputChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const errors = { ...this.state.errors, ...this.handleValidation(field, value) }
        if (errors.invalidCredentials) {
            delete errors.invalidCredentials;
        }

        this.setState((prevState) => {
            return {
                ...prevState,
                userCredentials: {
                    ...prevState.userCredentials,
                    [field]: value
                },
                errors: {...errors}
            };
        });
    }

    handleLogin = async (e) => {
        e.preventDefault();
        let errors = {...this.state.errors};
        const userCredentialsValid = Object.keys(errors).filter(field => errors[field] !== "").length === 0 ? true : false;
        if ( !userCredentialsValid ) {
            return;
        } else {
            const res = await this.props.userLogin(this.state.userCredentials)
            if (res==="AUTH_OK"){
                this.props.history.push('/');
            }
        }
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const inputFields = FIELDS.map(field =>
            <InputField key={field.name}
                        type={field.type} name={field.name} label={field.label}
                        errors={this.state.errors}
                        onChange={this.handleInputChange} />
        )
        return (
            <div className="container">
                <br />
                <h3 className="text-center">Login</h3>
                <div className="jumbotron">
                    { this.state.errors.invalidCredentials && <p className="text-danger">{this.state.errors.invalidCredentials}</p> }
                    <form onSubmit={this.handleLogin}>
                        { inputFields }
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.user.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogin: (userLoginDetails) => dispatch(userLoginThunk(userLoginDetails))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
