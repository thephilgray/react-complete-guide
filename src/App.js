import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium, { StyleRoot } from "radium";

class App extends Component {
  state = {
    persons: [
      { id: "sdfhk29", name: "Phil", age: 30 },
      { id: "s34wrj3", name: "Bob", age: 50 },
      { id: "efsjklk", name: "Cheongah", age: 29 }
    ],
    otherState: "some other value",
    showPersons: false
  };
  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "pink",
        color: "black"
      };
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>HI I'm .... </h1>
          <p className={classes.join(" ")}>This is really working!</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", { className: "App" }, "Hi im react")
    // );
  }
}

export default Radium(App);
