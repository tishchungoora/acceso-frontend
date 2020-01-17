import React, { Component } from "react";
import API from "../adapters/API";

export default class SavedBoardsPage extends Component {
  state = {
    boards: []
  };

  setBoards = () => {
    API.fetchBoards().then(data =>
      this.setState({
        boards: data.sort((a, b) =>
          a.title.localeCompare(b.title))
      })
    );
  };

  componentDidMount() {
      window.scrollTo(0, 0)
      this.setBoards()
  }

  render() {
    return (
      <div>
        <h1>Saved boards go here!</h1>
      </div>
    );
  }
}
