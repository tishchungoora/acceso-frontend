import React, { Component } from "react";
import SwitchToCategory from "../components/SwitchToCategory";

export default class SearchBar extends Component {
  render() {
    const {
      handleSearchInputChange,
      handleSearchSubmit,
      handleSearchClear,
      searchTerm,
      methodChange
    } = this.props;

    return (
      <div className="SearchBar">
        <form className="form-inline justify-content-center" onSubmit={handleSearchSubmit}>
          <input
            className="form-control m-2"
            type="text"
            placeholder="Search for..."
            aria-label="Search"
            onChange={handleSearchInputChange}
            value={searchTerm}
          />
          <button className="btn btn-primary m-2" type="submit">
            Search
          </button>
          <button
            className="btn btn-primary m-2"
            type="submit"
            onClick={handleSearchClear}
          >
            Clear
          </button>
        </form>
        <SwitchToCategory methodChange={methodChange} />
      </div>
    );
  }
}
