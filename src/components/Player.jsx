import React, { Component } from "react";

export default class Player extends Component {
  render() {
    const { playVoice, stopVoice, played } = this.props;

    return (
      <div className="Player row justify-content-center">
        {played ? (
          <button
            className="StopBtn btn btn-warning btn-lg"
            onClick={() => stopVoice()}
          >
            <i className="fas fa-stop"></i>
          </button>
        ) : (
          <button
            className="PlayBtn btn btn-warning btn-lg"
            onClick={() => playVoice()}
          >
            <i className="fas fa-play"></i>
          </button>
        )}
      </div>
    );
  }
}
