import React from "react";
import Person from "./Persons";

const PersonsList = ({ data, deletPeson }) => {
  const listOfPersons = data.map((person) => {
    return <Person person={person} key={person.id} deletPeson={deletPeson} />;
  });

  return <div>{listOfPersons}</div>;
};

export default PersonsList;
