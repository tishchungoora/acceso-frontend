import React, { Component } from "react";
import BoardCard from "../components/BoardCard";
import Save from "../components/Save"

export default class PecsBoard extends Component {
  render() {
    const { cardsOnBoard, removeCard, resetBoard } = this.props;

    return (
      <div className="PecsBoard">
        <div className="row justify-content-center">
          <h1>PECS board</h1>
        </div>
        <div className="row justify-content-center">
          <button className="btn btn-danger m-2" onClick={() => resetBoard()}><i className="fas fa-eraser"></i> Reset</button>

          <Save cardsOnBoard={cardsOnBoard} />
        </div>
        <div className="BoardCards">
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
