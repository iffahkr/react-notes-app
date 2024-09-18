import React from "react";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}


class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: props.defaultKeyword || "",
      notes: getArchivedNotes(),
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
    });
    return (
      <section>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <NotesList notes={notes} />
        <div className="detail-page__action">
          <button className="note-item__archive-button" type="button" title="Aktifkan" onClick={() => this.onArchiveHandler(id)}>
            <FiArchive />
          </button>
          <button className="note-item__delete-button" type="button" title="Hapus" onClick={() => this.onDeleteHandler(id)}>
            <FiTrash2 />
          </button>
        </div>
      </section>
    );
  }
}

export default ArchivePageWrapper;
