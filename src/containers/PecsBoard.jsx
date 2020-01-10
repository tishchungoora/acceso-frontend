import React, { Component } from "react";
import PecsContainer from "./PecsContainer";

export default class PecsBoard extends Component {
  render() {
    return (
      <div className="PecsBoard container-fluid">
        <div>
          <h1>Placeholder for board</h1>
        </div>
        <div>
          <PecsContainer />
        </div>
      </div>
    );
  }
}