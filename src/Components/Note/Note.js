import React from "react";
import { MdDeleteForever } from "react-icons/md";

import "./Note.css";
const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.5em"
        />
      </div>
    </div>
  );
};

export default Note;
