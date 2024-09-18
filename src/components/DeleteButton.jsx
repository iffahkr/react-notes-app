import React from "react";
import { FiTrash2 } from "react-icons/fi";

function DeleteButton({ id, onDelete }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" type="button" title="Hapus" onClick={() => onDelete(id)}>
        <FiTrash2 />
      </button>
    </div>
  );
}

export default DeleteButton;
