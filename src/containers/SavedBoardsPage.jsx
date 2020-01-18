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

 

  render() {
    const { boards } = this.state;
    return (
      <div className="SavedBoardPage container-fluid">
        {boards.map(board => (
          <SavedBoard key={board.id} board={board} />
        ))}
      </div>
    );
  }
}
