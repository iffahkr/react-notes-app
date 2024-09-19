import React from "react";
import { FiArchive, FiTrash } from "react-icons/fi";

function NotesButton({ id, onArchive, onDelete, onUnarchive }) {
  return (
    <div className="note-item__action">
      <button className="note-item__archive-button" type="button" title="Arsipkan" onClick={() => onArchive(id)}>
        <FiArchive />
      </button>
      <button className="note-item__unarchive-button" type="button" title="Aktifkan" onClick={() => onUnarchive(id)}>
        <FiArchive />
      </button>
      <button className="note-item__delete-button" type="button" title="Hapus" onClick={() => onDelete(id)}>
        <FiTrash />
      </button>
    </div>
  );
}

export default NotesButton;
