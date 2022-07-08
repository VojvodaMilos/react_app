import React, { Component } from "react";
import "../style/NewPerson.css";

class NewPeson extends Component {
  state = {
    name: "",
  };
  addNewPerson = (e) => {
    this.setState({
      [e.target.placeholder]: [e.target.value],
    });
  };
  save = (e) => {
    e.preventDefault();
    this.props.insertNewPerson(this.state);
  };

  render() {
    return (
      <div className="form">
        <form action="" onSubmit={this.save}>
          <input type="text" placeholder="name" onChange={this.addNewPerson} />
          <br />
          <input type="text" placeholder="job" onChange={this.addNewPerson} />
          <br />
          <input
            type="text"
            placeholder="gender"
            onChange={this.addNewPerson}
          />
          <br />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default NewPeson;
