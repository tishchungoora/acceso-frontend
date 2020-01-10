import React, { Component } from "react";

export default class CategorySelector extends Component {
  render() {
    const { categories, handleCategoryChange } = this.props;

    return (
      <div className="CategorySelector col-sm-3">
        <select
          className="form-control"
          id="parentCategorySelector"
          onChange={event => {
            handleCategoryChange(event.target.value);
          }}
        >
          <option value="All">Choose category...</option>
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
