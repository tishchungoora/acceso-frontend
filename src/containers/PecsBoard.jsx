import React, { Component } from "react";
import Card from "../components/Card";

export default class PecsBoard extends Component {
  render() {
    const { cardsOnBoard } = this.props;

    return (
      <div className="PecsBoard">
        <div className="row justify-content-center">
          <h1>PECS board</h1>
        </div>
        <div className="row justify-content-center">
          {cardsOnBoard.map(card => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    );
  }
}
