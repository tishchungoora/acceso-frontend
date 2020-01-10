import React, { Component } from "react";

export default class SubCategorySelector extends Component {
  render() {
    const { subcategories } = this.props;

    return (
      <div>
        <h5 className="pb-2">Sub category:</h5>
        <select className="form-control" id="subCategorySelector">
          <option value="All">All</option>
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
