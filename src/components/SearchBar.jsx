import React from "react";
import PropTypes from "prop-types";

function SearchBar({ keyword, keywordChange }) {
  return(
    <section className="search-bar">
      <input type="text" value={keyword} onChange={(event) => keywordChange(event.target.value)} placeholder="Cari catatan..." />
    </section>
  ) 
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.string.isRequired,
};

export default SearchBar;
