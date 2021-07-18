import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { userLogin } from '../reducers/userSlice';

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

    handleLogin = (e) => {
        e.preventDefault();
        let errors = {...this.state.errors};
        // console.log(this.state.userCredentials);
        const userCredentialsValid = Object.keys(errors).filter(field => errors[field] !== "").length === 0 ? true : false;
        if ( !userCredentialsValid ) {
            return;
        } else {
            this.props.userLogin(this.state.userCredentials)
            // .then(res => {
            //     if (res.errors) {
            //         this.setState(prevState => {
            //             return {
            //                 ...prevState,
            //                 userCredentials: {...prevState.userCredentials},
            //                 errors: {...prevState.errors, ...res.errors}
            //             };
            //         });
            //     } else {
            //         this.props.history.push('/');
            //     }
            // })
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
        userLogin: (userLoginDetails) => dispatch(userLogin(userLoginDetails))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
