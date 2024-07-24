import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
    };

    // bind -> agar nilai state dapat berubah
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  // event handler title
  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  // event handler body
  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  // event handler submit
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <section className="note-app__body">
        <h2>Buat Catatan</h2>
        <form className="note-input" onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Sisa karakter: 50</p>
          <input type="text" value={this.state.title} onChange={this.onTitleChangeEventHandler} placeholder="Ini adalah judul..." />
          <textarea className="note-input__body" name="" id="" value={this.state.body} onChange={this.onBodyChangeEventHandler} placeholder="Ketikkan catatan disini..."></textarea>
          <button className="note-input button" type="submit">
            Buat
          </button>
        </form>
      </section>
    );
  }
}

export default NoteInput;
