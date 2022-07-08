import React from "react";

const Person = ({ person, deletPeson }) => {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <h3>{person.job}</h3>
      <h3>{person.gender}</h3>
      <button
        className="delete"
        onClick={() => {
          deletPeson(person.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Person;
