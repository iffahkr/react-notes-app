import React from "react";
import { FiCheckCircle } from "react-icons/fi";

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
      <form className="add-new-page__input" onSubmit={this.onSubmitEventHandler}>
        <input className="add-new-page__input__title" type="text" value={this.state.title} onChange={this.onTitleChangeEventHandler} placeholder="Judul" />
        <textarea className="add-new-page__input__body" name="" id="" value={this.state.body} onChange={this.onBodyChangeEventHandler} placeholder="Ketikkan catatan..."></textarea>
        <div className="add-new-page__action">
          <button className="action" type="submit" title="Simpan">
            <FiCheckCircle />
          </button>
        </div>
      </form>
    );
  }
}

export default NoteInput;
