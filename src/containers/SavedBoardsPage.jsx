import React, { Component } from "react";
import SavedBoard from "../containers/SavedBoard";
import API from "../adapters/API";

export default class SavedBoardsPage extends Component {
  state = {
    boards: []
  };

  setBoards = () => {
    API.fetchBoards().then(data =>
      this.setState({
        boards: data.sort((a, b) => a.title.localeCompare(b.title))
      })
    );
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setBoards();
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
