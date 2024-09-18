import React from "react";
import NotesList from "./NotesList";

function ArchiveNotes({ notes, archived, onDelete, onArchive }) {
  return (
    <div className="note-app__body">
      <h2 className="notes__header">Catatan Arsip</h2>
      {notes.archived === true ? (
        <ul>
          {notes.map((note) => (
            <NotesList key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
          ))}
        </ul>
      ) : (
        <p className="notes-list__empty-message">Tidak ada arsip.</p>
      )}
    </div>
  );
}

export default ArchiveNotes;
