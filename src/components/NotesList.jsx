import React from "react";
import NotesButton from "./NotesButton";
import { showFormattedDate } from "../utils";

const NotesList = ({ title, body, createdAt, id, onDelete, onArchive }) => {
  return (
    <section className="notes-list">
      <div className="note-item">
        <div className="note-item__content">
          <h4 className="note-item__title">{title}</h4>
          <h6 className="note-item__date">{showFormattedDate(createdAt)}</h6>
          <p className="note-item__body">{body}</p>
        </div>
        <NotesButton id={id} onDelete={onDelete} onArchive={onArchive} />
      </div>
    </section>
  );
};

export default NotesList;
