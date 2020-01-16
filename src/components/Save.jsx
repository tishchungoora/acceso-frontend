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
    return (
      <div className="Save">
        <button className="btn btn-info m-2" onClick={this.handleClick}>
          <i className="fas fa-save"></i> Save
        </button>

        <Modal
          show={this.state.open}
          onHide={this.closeModal}
          aria-labelledby="ModalHeader"
        >
          <Modal.Header closeButton>
            <Modal.Title id="ModalHeader">
              <h1>Board details</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label for="boardTitle" className="col-form-label">
                Title:
              </label>
              <input type="text" className="form-control" id="boardTitle" />
            </div>
            <div>
              <p>Select a relevant behaviour:</p>
              <select className="form-control" id="behaviourSelect">
                <option value="">Choose behaviour...</option>
                <option value="Routine">Routine</option>
                <option value="Anxiety">Anxiety</option>
                <option value="Challenging">Challenging</option>
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <button className="btn btn-info m-2" onClick={() => {}}>
              Confirm
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
