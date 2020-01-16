import React, { Component } from "react";
import BoardCard from "../components/BoardCard";

export default class PrintBoard extends Component {
  print() {
    window.print();
  }

  render() {
    const { cardsOnBoard, removeCard, resetBoard } = this.props;

    return (
      <div className="PrintBoard">
        <div className="row justify-content-center noPrint">
          <h1>Print board</h1>
        </div>
        <div className="row justify-content-center noPrint">
          <button className="btn btn-danger" onClick={() => resetBoard()}>
            Reset board
          </button>
          <button className="btn btn-info ml-3" onClick={this.print}>
            Print
          </button>
        </div>
        <div className="row justify-content-center">
          {cardsOnBoard.map((card, index) => (
            <BoardCard
              key={card.id + index}
              card={card}
              removeCard={removeCard}
            />
          ))}
        </div>
      </div>
    );
  }
}
