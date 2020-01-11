import React, { Component } from "react";

export default class SwitchToCategory extends Component {
  render() {
    const { methodChange } = this.props;

    return (
      <div className="SwitchToCategory">
        <button type="button" className="btn btn-link" onClick={methodChange}>
          ... or filter by category
        </button>
      </div>
    );
  }
}
