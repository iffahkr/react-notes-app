import React from "react";
import { archiveNote, deleteNote, getNoteById } from "../utils/local-data";
import { showFormattedDate } from "../utils";
import { FiArchive, FiTrash } from "react-icons/fi";

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNoteById(props.id),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    archiveNote(id);
    this.setState({ notes });
  }

  render() {
    const { title, body, createdAt, id } = this.props;

    return (
      <section className="detail-page">
          <h4 className="detail-page__title">{title}</h4>
          <h6 className="detail-page__createdAt">{showFormattedDate(createdAt)}</h6>
          <p className="detail-page__body">{body}</p>
        <div className="detail-page__action">
          <button className="note-item__archive-button" type="button" title="Arsipkan" onClick={() => this.onArchiveHandler(id)}>
            <FiArchive />
          </button>
          <button className="note-item__delete-button" type="button" title="Hapus" onClick={() => this.onDeleteHandler(id)}>
            <FiTrash />
          </button>
        </div>
      </section>
    );
  }
}

export default DetailPage;
