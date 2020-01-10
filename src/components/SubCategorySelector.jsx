import React, { Component } from "react";

export default class SubCategorySelector extends Component {
  render() {
    const { subcategories, filterCards } = this.props;

    return (
      <div>
        <h5 className="pb-2">Now select a subcategory:</h5>
        <select className="form-control" id="subCategorySelector" onChange={event => filterCards(event.target.value)}>
          <option value="">Choose...</option>
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
