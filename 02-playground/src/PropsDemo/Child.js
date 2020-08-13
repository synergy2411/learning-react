import React from "react";

const Child = (props) => {
    return (
      <div>
        Props Demo - Child Component
        <p>User name : {props.username}</p>
        <p>Age : {props.age}</p>
        <button onClick={() => props.nameChanged("Ankit")}>Change Name</button>
      </div>
    );
  }

export default Child;
