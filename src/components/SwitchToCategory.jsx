import React, { Component } from "react";

export default class SwitchToCategory extends Component {
  render() {
    const { methodChange } = this.props;

    return (
      <div className="SwitchToCategory row justify-content-center">
        <button type="button" class="btn btn-link" onClick={methodChange}>... or filter by category</button>
      </div>
    );
  }
}