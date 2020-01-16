import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Player from "./Player";

export default class Card extends Component {
  state = {
    open: false,
    played: false
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  playVoice = () => {
    let wordSet = this.props.card.description;
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
    const { played } = this.state
    const { playVoice, stopVoice } = this
    const { card, selectCard } = this.props;

    return (
      <div className="card m-3 shadow">
        <button
          type="button"
          className="btn btn-link"
          onClick={this.handleClick}
        >
          Learn more
        </button>

        <Modal
          show={this.state.open}
          onHide={this.closeModal}
          aria-labelledby="ModalHeader"
        >
          <Modal.Header closeButton>
            <Modal.Title id="ModalHeader">
              <h1>{card.title}</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-img">
              <img
                className="img-fluid"
                src={card.image_url}
                alt={card.title}
              />
            </div>
            <div>
              <p>{card.description}</p>
            </div>
            <div>
              <Player
                playVoice={playVoice}
                stopVoice={stopVoice}
                played={played}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <p>Category: {card.category.name}</p>
          </Modal.Footer>
        </Modal>

        <img className="card-img-top" src={card.image_url} alt={card.title} />
        <div className="card-body text-center">
          <button
            className="btn btn-warning btn-lg"
            onClick={() => selectCard(card)}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}
