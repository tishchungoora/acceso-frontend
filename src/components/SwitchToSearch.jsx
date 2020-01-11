import React, { Component } from "react";

export default class SwitchToSearch extends Component {
  render() {
    const { methodChange } = this.props;

    return (
      <div className="SwitchToSearch">
        <button type="button" class="btn btn-link" onClick={methodChange}>... or search</button>
      </div>
    );
  }
}