import React, { Component } from "react";

export default class Player extends Component {
  render() {
    const { composePhrase } = this.props;

    return (
      <div className="Player row justify-content-center">
        <button className="btn btn-warning btn-lg" onClick={() => composePhrase()}>
          <span className="oi oi-media-play"></span>
        </button>
      </div>
    );
  }
}
