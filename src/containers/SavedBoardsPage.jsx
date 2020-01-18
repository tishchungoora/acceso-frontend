import React, { Component } from "react";
import SavedBoard from "../containers/SavedBoard";
import API from "../adapters/API";

export default class SavedBoardsPage extends Component {
  state = {
    boards: [],
    behaviours: []
  };

  setBoards = () => {
    API.fetchBoards().then(data =>
      this.setState({
        boards: data.sort((a, b) => a.title.localeCompare(b.title))
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
    API.deleteBoard(id)
    
    const boards = this.state.boards.filter(b => b.id !== id)
    this.setState({ boards })
  }

  render() {
    const { boards } = this.state;
    const { handleDeletion } = this;

    return (
      <div className="SavedBoardPage container-fluid">
        {boards.map(board => (
          <SavedBoard key={board.id} board={board} handleDeletion={handleDeletion} />
        ))}
      </div>
    );
  }
}
