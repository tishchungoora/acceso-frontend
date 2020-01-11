import React, { Component } from "react";
import PecsContainer from "./PecsContainer";

export default class PecsBoard extends Component {
  render() {
    return (
      <div className="PecsBoard container-fluid">
        <div className="row">
          <h1 className="display-4">Placeholder for board</h1>
        </div>
        <div className="row">
          <PecsContainer />
        </div>
      </div>
    );
  }
}