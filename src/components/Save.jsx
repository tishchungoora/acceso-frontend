import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import API from "../adapters/API";

export default class Save extends Component {
  state = {
    open: false,
    behaviours: [],
    title: "",
    behaviourId: null,
    userId: null
  };

  setBehaviours = () => {
    API.fetchBehaviours().then(data =>
      this.setState({
        behaviours: data
      })
    );
  };

  setUserId = () => {
    API.fetchUsers().then(data =>
      this.setState({
        userId: data[0].id
      })
    );
  };

  componentDidMount() {
    this.setBehaviours();
    this.setUserId();
  }

  handleClick = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false, selectedBehaviour: null, title: "" });
  };

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleBehaviourChoice = event => {
    let behaviour = this.state.behaviours.find(
      el => el.name === event.target.value
    );
    this.setState({
      behaviourId: behaviour.id
    });
  };

  handleConfirmation = () => {
    let boardData = {
      title: this.state.title,
      behaviour_id: this.state.behaviourId,
      user_id: this.state.userId,
      cards: this.props.cardsOnBoard
    };
    API.postBoard(boardData);
    this.closeModal();
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
              <input
                type="text"
                name="title"
                className="form-control"
                id="boardTitle"
                placeholder="Enter title"
                onChange={this.handleTitleChange}
                required
              />
            </div>
            <div>
              <p>Select a relevant behaviour:</p>
              <select
                className="form-control"
                id="behaviourSelect"
                onChange={this.handleBehaviourChoice}
              >
                <option value="">Choose behaviour...</option>
                {behaviours.map(behaviour => (
                  <option
                    key={behaviour.id}
                    value={behaviour.name}
                    title={behaviour.description}
                  >
                    {behaviour.name}
                  </option>
                ))}
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <button
              className="btn btn-info m-2"
              onClick={this.handleConfirmation}
            >
              Confirm
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
