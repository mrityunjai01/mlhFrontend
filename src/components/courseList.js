import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";

const Course = (props) => (
  <tr className="p-2">
    <td>{props.record.person_name}</td>
    <td>{props.record.person_position}</td>
    <td>{props.record.person_level}</td>
    <td>
      <Link to={"/edit/" + props.record._id}>Edit</Link> |
      <a
        href="/"
        onClick={() => {
          props.deleteCourse(props.record._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default class CourseList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteCourse = this.deleteCourse.bind(this);
    this.state = { records: [] };
  }

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:3000/record/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will delete a record based on the method
  deleteCourse(id) {
    axios.delete("http://localhost:3000/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      record: this.state.records.filter((el) => el._id !== id),
    });
  }

  // This method will map out the users on the table
  recordList() {
    return this.state.records.map((currentrecord) => {
      return (
        <Course
          record={currentrecord}
          deleteCourse={this.deleteCourse}
          key={currentrecord._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  render() {
    return (
      <div className="m-3">
        <h3>Course List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
      </div>
    );
  }
}
