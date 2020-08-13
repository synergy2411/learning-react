import React from "react";

const Child = (props) => {
  console.log("PROPS : ", props);
  return (
    <div>
      Child Component
      <p>User name : {props.username}</p>
      <p>Age : {props.age}</p>
      <button onClick={() => props.nameChanged("Ankit")}>Change Name</button>
    </div>
  );
};

export default Child;
