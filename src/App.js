import React, { Component, Fragment } from "react";
import "./styles.css";

export default class DemoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      pass: ""
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({ value: event.target.value });
  }

  handleChange2(event) {
    this.setState({ pass: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "A name was submitted: " + this.state.value + " pass: " + this.state.pass
    );
    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <div> Hello, {this.state.value} is my value.</div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange1}
            />
          </div>
          <div>
            <label>Pass:</label>
            <input
              type="text"
              value={this.state.pass}
              onChange={this.handleChange2}
            />
          </div>
          <div>
            <input type="submit" name="Submit" />
          </div>
        </form>
      </Fragment>
    );
  }
}
