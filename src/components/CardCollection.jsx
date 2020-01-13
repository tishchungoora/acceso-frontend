import React, { Component } from "react";
import Card from "../components/Card";

export default class CardCollection extends Component {
  render() {
    const { displayedCards, selectCard } = this.props;

    return (
      <div className="CardCollection">
        <div className="row justify-content-center">
        {displayedCards.map(card => (
          <Card key={card.id} card={card} selectCard={selectCard} />
        ))}
        </div>
      </div>
    );
  }
}
