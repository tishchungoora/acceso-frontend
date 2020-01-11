import React, { Component } from "react";
import Card from "../components/Card";

export default class CardCollection extends Component {
  render() {
    const { displayedCards, selectedCard } = this.props;

    return (
      <div className="CardCollection">
        <div className="row justify-content-center">
          
        <h1>PECS cards</h1>
        </div>
        <div className="row justify-content-center">

        {displayedCards.map(card => (
          <Card key={card.id} card={card} selectedCard={selectedCard} />
        ))}
        </div>
      </div>
    );
  }
}
