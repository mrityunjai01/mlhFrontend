import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';

export default class Create extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangecourseName = this.onChangecourseName.bind(this);
    this.onChangecoursePosition = this.onChangecoursePosition.bind(this);
    this.onChangecourseLevel = this.onChangecourseLevel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      course_name: "",
      course_position: "",
      course_level: "",
    };
  }

  // These methods will update the state properties.
  onChangecourseName(e) {
    this.setState({
      course_name: e.target.value,
    });
  }

  onChangecoursePosition(e) {
    this.setState({
      course_position: e.target.value,
    });
  }

  onChangecourseLevel(e) {
    this.setState({
      course_level: e.target.value,
    });
  }

// This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();

    // When post request is sent to the create url, axios will add a new record(newcourse) to the database.
    const newcourse = {
      course_name: this.state.course_name,
      course_position: this.state.course_position,
      course_level: this.state.course_level,
    };

    axios
      .post("http://localhost:3000/record/add", newcourse)
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState({
      course_name: "",
      course_position: "",
      course_level: "",
    });
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div className="m-3">
        <h3>Create New Course</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name of the course: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.course_name}
              onChange={this.onChangecourseName}
            />
          </div>
          <div className="form-group">
            <label>course's position: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.course_position}
              onChange={this.onChangecoursePosition}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Intern"
                checked={this.state.course_level === "Intern"}
                onChange={this.onChangecourseLevel}
              />
              <label className="form-check-label">Intern</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Junior"
                checked={this.state.course_level === "Junior"}
                onChange={this.onChangecourseLevel}
              />
              <label className="form-check-label">Junior</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="Senior"
                checked={this.state.course_level === "Senior"}
                onChange={this.onChangecourseLevel}
              />
              <label className="form-check-label">Senior</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create course"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
