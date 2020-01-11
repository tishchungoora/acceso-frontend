import React, { Component } from "react";

export default class SwitchToSearch extends Component {
  render() {
    const { methodChange } = this.props;

    return (
      <div className="SwitchToSearch m-2">
        <button type="button" className="btn btn-link" onClick={methodChange}>
          ... or search
        </button>
      </div>
    );
  }
}
