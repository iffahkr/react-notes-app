import React from "react";
import SearchBar from "../components/SearchBar";
import { getAllNotes } from "../utils/local-data";
import { Link, useSearchParams } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import ActiveNotes from "../components/ActiveNotes";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      keyword: props.defaultKeyword || "",
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
        <h2>Catatan Aktif</h2>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <ActiveNotes notes={notes} />
        <div className="homepage__action">
          <Link to="/add">
            <button className="action" type="button" title="Tambah">
              <FiPlus />
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export default HomePageWrapper;
