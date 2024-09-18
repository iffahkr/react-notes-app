import React from "react";
// import NotesButton from "./NotesButton";
import { showFormattedDate } from "../utils/index";

const NotesList = ({ title, body, createdAt, id }) => {
  return (
    <section className="notes-list">
      <div className="note-item">
        <h4 className="note-item__title">{title}</h4>
        <h6 className="note-item__createdAt">{showFormattedDate(createdAt)}</h6>
        <p className="note-item__body">{body}</p>
      </div>
    </section>
  );
};

export default NotesList;
