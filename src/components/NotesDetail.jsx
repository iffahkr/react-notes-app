import React from "react";
import NotesList from "./NotesList";
import NotesButton from "./NotesButton";

function NotesDetail({ id, title, body, createdAt, onArchive, onDelete, onUnarchive }) {
  return (
    <div>
      <NotesList id={id} title={title} body={body} createdAt={createdAt} />
      <NotesButton id={id} onArchive={onArchive} onDelete={onDelete} onUnarchive={onUnarchive} />
    </div>
  );
}

export default NotesDetail;
