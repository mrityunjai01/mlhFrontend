import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ErrorMsg from './errorMsg';
import InputField from './inputField';

const addNewCourse = (CourseData) => {
    return fetch('/api/Courses/add', options(CourseData))
    .then(res => res.json())
}
const options = data => {
    return {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data)
    };
};

const FIELDS = [
    {name: 'title', type: 'text', label: 'Title'},
    {name: 'author', type: 'text', label: 'Author', disabled: 'disabled'}
];
class AddCourse extends Component {
    state = {
        Course: {},
        errors: {}
    };

    componentWillMount() {
        if (localStorage.getItem('AddCoursePage') !== null ) {
            const { Course, errors } = JSON.parse(localStorage.getItem('AddCoursePage'));
            this.setState(prevState => {
                return {
                    ...prevState,
                    Course: {...Course},
                    errors: {...errors}
                };
            });
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

        this.setState((prevState) => {
            return {
                ...prevState,
                Course: {
                    ...prevState.Course,
                    [field]: value
                },
                errors: {...errors}
            };
        }, () => localStorage.setItem('AddCoursePage', JSON.stringify(this.state)));
    }

    componentWillUnmount() {
        localStorage.removeItem('AddCoursePage');
    }

    handleNewCourseSubmit = (e) => {
        e.preventDefault();
        let errors = {...this.state.errors};
        const formValuesValid = Object.keys(errors).filter(field => errors[field] !== "").length === 0 ? true : false;
        if ( !formValuesValid ) {
            return;
        } else {
            this.props.addNewCourse({...this.state.Course, author: this.props.authenticatedUsername})
            .then(res => {
                if (res.errors) {
                    this.setState(prevState => {
                        return {
                            ...prevState,
                            Course: {...prevState.Course},
                            errors: {...prevState.errors, ...res.errors}
                        };
                    });
                } else {
                    this.props.history.push('/');
                }
            })
        }
    }

    render() {
        if (!this.props.isAuthenticated) {
            return <Redirect to="/login" />;
        }
        return (
            <div className="container">
                <br />
                <h3 className="text-center">Add Course</h3>
                <div className="jumbotron">
                    <form onSubmit={this.handleNewCourseSubmit}>
                        <InputField key={FIELDS[0].name}
                            type={FIELDS[0].type} name={FIELDS[0].name} label={FIELDS[0].label}
                            defaultValue={this.state.Course.title}
                            errors={this.state.errors}
                            onChange={this.handleInputChange} />
                        <InputField key={FIELDS[1].name}
                            type={FIELDS[1].type} name={FIELDS[1].name} label={FIELDS[1].label}
                            defaultValue={this.props.authenticatedUsername} disabled={FIELDS[1].disabled}
                            errors={this.state.errors}
                            onChange={this.handleInputChange} />
                        <div className="form-group">
                            <label>Body</label>
                            <textarea
                                name="body" style={{height: '200px'}}
                                className="form-control" placeholder="Your Course's contents goes here... Good luck!"
                                onChange={this.handleInputChange}
                                defaultValue={this.state.Course.body} />
                            {this.state.errors.body !== '' && <ErrorMsg msg={this.state.errors.body} />}
                        </div>
                        <button className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
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
        addNewCourse: (CourseData) => dispatch(addNewCourse(CourseData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
