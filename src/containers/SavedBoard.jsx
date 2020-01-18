import React, { Component } from "react";
import Player from "../components/Player";

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

  render() {
    const { played } = this.state;
    const { playVoice, stopVoice } = this;
    const { board, handleDeletion } = this.props;

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
        <button className="btn btn-danger btn-lg" onClick={() => handleDeletion(board.id)}>
          Delete
        </button>

      </div>
    );
  }
}
