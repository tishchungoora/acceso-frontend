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
        displayedBoards: data.sort((a, b) => a.title.localeCompare(b.title)),
        boards: data
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
    this.setState({ boards });
  };

  handleFilter = choice => {
    let newBoards = this.state.boards.filter(b => b.behaviour.name === choice)
    this.setState({
      displayedBoards: newBoards
    })
  }

  render() {
    const { displayedBoards, behaviours } = this.state;
    const { handleDeletion, handleFilter } = this;

    return (
      <div className="SavedBoardPage container-fluid">
        <BehaviourSelector behaviours={behaviours} handleFilter={handleFilter} />
        <hr />
        {displayedBoards.map(board => (
          <SavedBoard
            key={board.id}
            board={board}
            handleDeletion={handleDeletion}
          />
        ))}
      </div>
    );
  }
}
