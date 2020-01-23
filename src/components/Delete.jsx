import React, { Component } from "react";
import { Modal } from "react-bootstrap";

export default class Delete extends Component {
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
    const { handleDeletion, board } = this.props;

    return (
      <div className="Delete">
        <button className="btn btn-danger" onClick={this.handleClick}>
          Delete
        </button>

        <Modal
          show={this.state.open}
          onHide={this.closeModal}
          aria-labelledby="ModalHeader"
        >
          <Modal.Header closeButton>
            <Modal.Title id="ModalHeader">
              <h1>Confirm delete</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <button
                className="btn btn-danger m-2"
                onClick={() => handleDeletion(board.id)}
              >
                OK
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
