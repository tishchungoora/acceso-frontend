import React, { Component } from "react";
import BoardCard from "../components/BoardCard";

export default class PecsBoard extends Component {
  render() {
    const { cardsOnBoard, removeCard } = this.props;

    return (
      <div className="PecsBoard">
        <div className="row justify-content-center">
          <h1>PECS board</h1>
        </div>
        <div className="row justify-content-center">
          {cardsOnBoard.map((card, index) => (
            <BoardCard key={card.id+index} card={card} removeCard={removeCard} />
          ))}
        </div>
      </div>
    );
  }
}
