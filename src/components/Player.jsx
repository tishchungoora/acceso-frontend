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
            <span className="oi oi-media-stop"></span>
          </button>
        ) : (
          <button
            className="PlayBtn btn btn-warning btn-lg"
            onClick={() => playVoice()}
          >
            <span className="oi oi-media-play"></span>
          </button>
        )}
      </div>
    );
  }
}
