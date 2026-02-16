import React, { Component } from "react";


class Student extends Component {
  constructor(props) {
    super(props);

   
    this.state = {
      name: "",
      course: "",
      city: ""
    };
  }

  showStudent1 = () => {
    const s = this.props.data.student1;
    this.setState({
      name: s.name,
      course: s.course,
      city: s.city
    });
  };

  showStudent2 = () => {
    const s = this.props.data.student2;
    this.setState({
      name: s.name,
      course: s.course,
      city: s.city
    });
  };

  showStudent3 = () => {
    const s = this.props.data.student3;
    this.setState({
      name: s.name,
      course: s.course,
      city: s.city
    });
  };

  render() {
    return (
      <div style={{marginTop: "30px" }}>
        <h1>Student Information</h1>

        <button onClick={this.showStudent1}>Student 1</button>
        <button onClick={this.showStudent2}>Student 2</button>
        <button onClick={this.showStudent3}>Student 3</button>

        <div style={{ marginTop: "20px" }}>
          <p>Name: {this.state.name}</p>
          <p>Course: {this.state.course}</p>
          <p>City: {this.state.city}</p>
        </div>
      </div>
    );
  }
}

export default Student;
