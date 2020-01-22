import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import API from "../adapters/API";

export default class Save extends Component {
  state = {
    open: false,
    behaviours: [],
    title: "",
    behaviourId: null
  };

  setBehaviours = () => {
    API.fetchBehaviours().then(data =>
      this.setState({
        behaviours: data,
        behaviourId: data[0].id
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
    this.setState({ open: false, behaviourId: null, title: "" });
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

  handleConfirmation = event => {
    event.preventDefault();

    let boardData = {
      title: this.state.title,
      behaviour_id: this.state.behaviourId,
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
          <i className="fas fa-save"></i> Save new board
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
            <form onSubmit={event => this.handleConfirmation(event)}>
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
              <div className="form-group">
                <label htmlFor="behaviourSelect">
                  Select a relevant behaviour:
                </label>
                <select
                  className="form-control"
                  id="behaviourSelect"
                  onChange={this.handleBehaviourChoice}
                  required
                >
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
              <div className="row justify-content-center">
                <button className="btn btn-info m-2" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
