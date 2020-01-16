import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import API from "../adapters/API";

export default class Card extends Component {
  state = {
    open: false,
    behaviours: []
  };

  setBehaviours = () => {
    API.fetchBehaviours().then(data =>
      this.setState({
        behaviours: data
      })
    );
  };

  componentDidMount() {
    this.setBehaviours();
  }

  handleClick = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { behaviours } = this.state;

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
              <label htmlFor="boardTitle" className="col-form-label">
                Title:
              </label>
              <input type="text" className="form-control" id="boardTitle" />
            </div>
            <div>
              <p>Select a relevant behaviour:</p>
              <select className="form-control" id="behaviourSelect">
                <option value="">Choose behaviour...</option>
                {behaviours.map(behaviour => (
                  <option key={behaviour.id} value={behaviour.name}>
                    {behaviour.name}
                  </option>
                ))}
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
