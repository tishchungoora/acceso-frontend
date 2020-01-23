import React, { Component } from "react";
import Player from "../components/Player";
import Delete from "../components/Delete";

export default class SavedBoard extends Component {
  state = {
    played: false
  };

  playVoice = () => {
    let wordSet = this.props.board.cards.map(card => card.title).join(", ");

    window.responsiveVoice.enableEstimationTimeout = false;
    window.responsiveVoice.speak(wordSet, "UK English Female", {
      rate: 0.85,
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
      <div className={board.behaviour.name + " SavedBoard container-fluid shadow"}>
        <div className="Title row justify-content-center">
            <h2 className={board.behaviour.name}>{board.title}</h2>
          </div>
          <div className="Player">
            <Player
              playVoice={playVoice}
              stopVoice={stopVoice}
              played={played}
            />
          </div>
        <hr />
        <div className="row justify-content-center">
          <div className="card-deck">
            {board.cards.map(card => (
              <div key={card.id} className="card shadow">
                <img
                  className="card-img-top"
                  src={card.image_url}
                  alt={card.title}
                />
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <Delete handleDeletion={handleDeletion} board={board} />
        </div>
      </div>
    );
  }
}
