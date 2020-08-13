import React from "react";
import "./Note.css";

const Note = (props) => {
  return (
    <div className="col-sm-6 col-md-6 ">
      <div className="card Note">
        <div className="card card-header">
          <p className="text-center display-5">
            {props.note.title.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Note;
