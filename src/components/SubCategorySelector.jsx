import React, { Component } from "react";

export default class SubCategorySelector extends Component {
  render() {
    const { subcategories, filterCards } = this.props;

    return (
      <div className="SubCategorySelector col-sm-3">
        <select className="form-control" id="subCategorySelector" onChange={event => filterCards(event.target.value)}>
          <option value="">Choose subcategory...</option>
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
