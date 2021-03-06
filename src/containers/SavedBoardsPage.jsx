import React, { Component } from "react";
import SavedBoard from "./SavedBoard";
import BehaviourSelector from "../components/BehaviourSelector";
import API from "../adapters/API";

export default class SavedBoardsPage extends Component {
  state = {
    boards: [],
    displayedBoards: [],
    behaviours: []
  };

  setBoards = () => {
    API.fetchBoards().then(data =>
      this.setState({
        boards: data.filter(board => board.user.id === this.props.user.id),
        displayedBoards: data.filter(board => board.user.id === this.props.user.id)
      })
    );
  };

  setBehaviours = () => {
    API.fetchBehaviours().then(data =>
      this.setState({
        behaviours: data
      })
    );
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setBoards();
    this.setBehaviours();
  }

  handleDeletion = id => {
    API.deleteBoard(id);

    const boards = this.state.boards.filter(b => b.id !== id);
    this.setState({ boards, displayedBoards: boards });
  };

  handleFilter = choice => {
    let newBoards = this.state.boards.filter(b => b.behaviour.name === choice);
    this.setState({
      displayedBoards: newBoards
    });
  };

  handleFilterClear = event => {
    event.preventDefault();
    this.setState({
      displayedBoards: this.state.boards
    });
    this.state.behaviours.map(
      behaviour => (document.getElementById(behaviour.name).checked = false)
    );
  };

  render() {
    const { displayedBoards, behaviours } = this.state;
    const { handleDeletion, handleFilter, handleFilterClear } = this;

    return (
      <div className="SavedBoardsPage container-fluid">
        <BehaviourSelector
          behaviours={behaviours}
          handleFilter={handleFilter}
          handleFilterClear={handleFilterClear}
        />
        <hr />
        {displayedBoards.length < 1 ? (
          <div className="row justify-content-center">
            <h3>There is currently no board to show...</h3>
          </div>
        ) : (
          displayedBoards.map(board => (
            <SavedBoard
              key={board.id}
              board={board}
              handleDeletion={handleDeletion}
            />
          ))
        )}
      </div>
    );
  }
}
