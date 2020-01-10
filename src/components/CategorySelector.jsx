import React, { Component } from "react";

export default class CategorySelector extends Component {
  render() {
    const { categories, handleCategoryChange } = this.props;

    return (
      <div>
        <h5 className="pb-2">Filter by category:</h5>
        <select
          className="form-control"
          id="parentCategorySelector"
          onChange={event => {
            handleCategoryChange(event.target.value);
          }}
        >
          <option value="All">All</option>
          {categories.map(category => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
