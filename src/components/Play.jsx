import React, { Component } from "react";

export default class Play extends Component {
  render() {
    return (
      <div className="Play row justify-content-center">
        <button className="btn btn-warning">
            <span className="oi oi-media-play"></span>
          </button>
      </div>
    );
  }
}