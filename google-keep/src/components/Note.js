import React from "react";
import { Delete } from "@material-ui/icons";

const Note = (props) => {
  function DeleteNote() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={DeleteNote}>
        <Delete />
      </button>
    </div>
  );
};

export default Note;
