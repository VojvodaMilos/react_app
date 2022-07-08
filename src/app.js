import React, { Component } from "react";
import PersonsList from "./component/PersonsList";
import NewPeson from "./component/form";

//style
import "./style/style.css";

class App extends Component {
  state = {
    data: [
      { name: "Milos", job: "developer", gender: "male", id: "1" },
      { name: "Marako", job: "gamer", gender: "male", id: "2" },
      { name: "Ana", job: "gamer", gender: "famale", id: "3" },
    ],
  };

  insertNewPerson = (person) => {
    person.id = Math.floor(Math.random() * 100);
    let copyData = this.state.data.concat(person);
    this.setState({
      data: copyData,
    });
  };
  deletPeson = (id) => {
    let filterData = this.state.data.filter((el) => {
      return el.id !== id;
    });
    this.setState({
      data: filterData,
    });
  };

  render() {
    return (
      <div>
        <PersonsList data={this.state.data} deletPeson={this.deletPeson} />
        <NewPeson insertNewPerson={this.insertNewPerson} />
      </div>
    );
  }
}
export default App;
