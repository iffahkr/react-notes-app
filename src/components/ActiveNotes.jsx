import React from "react";
import NotesList from "./NotesList";

const ActiveNotes = ({ notes, onDelete, onArchive }) => {
  return (
    <div className="note-app__body">
      <h2 className="notes__header">Catatan Aktif</h2>
      {notes.length === 0 ? (
        <p className="notes-list__empty-message">Tidak ada catatan.</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <NotesList key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActiveNotes;
