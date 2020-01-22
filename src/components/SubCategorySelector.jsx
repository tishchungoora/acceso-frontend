import React, { Component } from "react";

export default class SubCategorySelector extends Component {
  render() {
    const { subcategories, filterCards } = this.props;

    return (
      <div className="SubCategorySelector col m-2">
        <select
          className="form-control"
          id="subCategorySelector"
          onChange={event => filterCards(event.target.value)}
        >
          <option value="">2. Choose subcategory...</option>
          {subcategories.map(subcat => (
            <option key={subcat.id} value={subcat.name}>
              {subcat.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
