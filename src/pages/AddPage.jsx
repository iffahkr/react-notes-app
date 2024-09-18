import React from "react";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

function AddPage() {
  const navigate = useNavigate();
  function onAddNoteHandler(title, body) {
    addNote(title, body);
    navigate("/");
  }
  return (
    <section>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
