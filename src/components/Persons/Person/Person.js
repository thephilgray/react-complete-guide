import React, { Component } from "react";
import styles from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
  }
  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }
  componentDidMount() {
    console.log("[Person.js] inside componentDidMount()");
  }
  componentWillUnmount() {
    // Component is about to get removed => Perform any cleanup work here!
    console.log("I'm about to be removed!");
  }
  render() {
    console.log("[Person.js] inside render()");
    return (
      <div className={styles.Person}>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am{" "}
          {Math.floor(Math.random() * this.props.age)} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
