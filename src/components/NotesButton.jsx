import React from "react";

const NotesButton = ({ id, onDelete, onArchive }) => {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Hapus
      </button>
      <button className="note-item__archive-button" onClick={() => onArchive(id)}>
        Arsipkan
      </button>
    </div>
  );
};

export default NotesButton;
