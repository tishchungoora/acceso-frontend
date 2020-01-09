import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <h5 className="pb-2">Search by keyword:</h5>
        <form className="form-inline">
          <input
            className="form-control"
            type="text"
            placeholder="Search for..."
            aria-label="Search"
          />
          <button className="btn btn-primary ml-2" type="submit">
            Search
          </button>
          <button className="btn btn-primary ml-2" type="submit">
            Clear
          </button>
        </form>
      </div>
    );
  }
}
