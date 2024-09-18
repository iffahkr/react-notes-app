import React from "react";
import { FiArchive } from "react-icons/fi";

function UnarchiveButton({ id, onArchive }) {
  return (
    <div className="note-item__action">
      <button className="note-item__archive-button" type="button" title="Arsipkan" onClick={() => onArchive(id)}>
        <FiArchive />
      </button>
    </div>
  );
}

export default UnarchiveButton;
