import React from "react";
import Header from "./Header";
import NoteInput from "./NoteInput";
import Footer from "./Footer";
import { getInitialData, showFormattedDate } from "../utils";
import ActiveNotes from "./ActiveNotes";
import ArchiveNotes from "./ArchiveNotes";
// import NotesList from "./NotesList";
// import NotesButton from "./NotesButton";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      search: "",
      archivedNotes: []
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    // this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  // onArchiveHandler(id) {
  //   this.setState((prevState) => {
  //     const activeNote = prevState.notes.find((note) => note.id === id);
  //     if (activeNote) {
  //       activeNote.archived = true;
  //       return {
  //         notes: prevState.filter((note) => note.id !== id),
  //         archivedNotes: [...prevState.archivedNotes, activeNote],
  //       };
  //     }
  //   });
  // }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: +new Date(),
          },
        ],
      };
    });
  }

  onSearchChangeEventHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) => note.body.toLowerCase().includes(this.state.search.toLowerCase()));

    return (
      <>
        <main>
          <Header notes={this.state.notes} onSearch={this.onSearchChangeEventHandler} />
          <NoteInput addNote={this.onAddNoteHandler} />
          <ActiveNotes notes={filteredNotes} onDelete={this.onDeleteHandler} />
          <ArchiveNotes notes={filteredNotes} onDelete={this.onDeleteHandler} />
          <Footer />
        </main>
      </>
    );
  }
}

export default NotesApp;
