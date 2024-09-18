import React from "react";
import NotesList from "./NotesList";

function ActiveNotes({ notes }) {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <section className="notes-list-empty">
          <p>Tidak ada catatan</p>
        </section>
      ) : (
        <ul>
          {notes.map((note) => (
            <NotesList key={note.id} id={note.id} {...note} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ActiveNotes;
