import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    const {
      handleSearchInputChange,
      handleSearchSubmit,
      handleSearchClear,
      searchTerm
    } = this.props;

    return (
      <div>
        <h5 className="pb-2">Enter a keyword:</h5>
        <form className="form-inline" onSubmit={handleSearchSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="Search for..."
            aria-label="Search"
            onChange={handleSearchInputChange}
            value={searchTerm}
          />
          <button className="btn btn-primary ml-2" type="submit">
            Search
          </button>
          <button
            className="btn btn-primary ml-2"
            type="submit"
            onClick={handleSearchClear}
          >
            Clear
          </button>
        </form>
      </div>
    );
  }
}
