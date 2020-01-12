import React, { Component } from "react";
import { Modal } from "react-bootstrap";

export default class Card extends Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { card, selectCard } = this.props;

    return (
      <div className="card m-3 shadow">
        <button type="button btn-link" onClick={this.handleClick}>
          Learn more
        </button>

        <Modal
          show={this.state.open}
          onHide={this.closeModal}
          aria-labelledby="ModalHeader"
        >
          <Modal.Header closeButton>
            <Modal.Title id="ModalHeader">{card.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{card.description}</p>
          </Modal.Body>
        </Modal>

        <img className="card-img-top" src={card.image_url} alt={card.title} />
        <div className="card-body text-center">
          <button
            className="btn btn-warning btn-lg"
            onClick={() => selectCard(card)}
          >
            <span className="oi oi-plus"></span>
          </button>
        </div>
      </div>
    );
  }
}
