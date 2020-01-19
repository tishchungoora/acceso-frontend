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
        <div className="row justify-content-center">
          <form className="form-inline" onSubmit={handleSearchSubmit}>
            <div className="input-group m-2">
              <div className="input-group-prepend">
                <button
                  className="Magnifier btn btn-primary"
                  type="submit"
                  title="Search"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <input
                className="form-control"
                type="text"
                placeholder="Search for..."
                aria-label="Search"
                onChange={handleSearchInputChange}
                value={searchTerm}
              />
              {searchTerm === "" ? (
                true
              ) : (
                <div className="input-group-append">
                  <button
                    className="Clear btn btn-outline-secondary"
                    type="submit"
                    title="Clear search"
                    onClick={handleSearchClear}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
        <div className="row justify-content-center mt-2 mb-2">
          <SwitchToCategory methodChange={methodChange} />
        </div>
      </div>
    );
  }
}
