import React, { Component } from "react";

export default class SwitchToCategory extends Component {
  render() {
    const { methodChange } = this.props;

    return (
      <div className="SwitchToCategory">
        <button
          type="button"
          className="btn btn-outline-secondary"
          title="Filter by category"
          onClick={methodChange}
        >
          <i className="fas fa-filter"></i>
        </button>
      </div>
    );
  }
}
