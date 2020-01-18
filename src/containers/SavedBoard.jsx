import React, { Component } from "react";
import Player from "../components/Player";
import API from "../adapters/API";

export default class SavedBoard extends Component {
  state = {
    played: false
  };

  playVoice = () => {
    let wordSet = this.props.board.cards.map(card => card.title).join(", ");

    window.responsiveVoice.enableEstimationTimeout = false;
    window.responsiveVoice.speak(wordSet, "UK English Female", {
      rate: 1,
      onend: this.toggleToPlay
    });
    this.setState({ played: true });
  };

  stopVoice = () => {
    window.responsiveVoice.cancel();
    this.setState({ played: false });
  };

  toggleToPlay = () => {
    this.setState({ played: false });
  };

  handleDeletion = () => {
    API.deleteBoard(this.props.board.id)
    console.log(this.props.board.id)
  }

  render() {
    const { played } = this.state;
    const { playVoice, stopVoice } = this;
    const { board } = this.props;
    return (
      <div className="card-deck container-fluid">
        <h2>{board.title}</h2>
        {board.cards.map(card => (
          <div key={card.id} className="card">
            <img
              className="card-img-top"
              src={card.image_url}
              alt={card.title}
            />
          </div>
        ))}
        <Player playVoice={playVoice} stopVoice={stopVoice} played={played} />
        <button className="btn btn-danger btn-lg" onClick={this.handleDeletion}>
          Delete
        </button>

      </div>
    );
  }
}
