import React, { Component } from "react";
import Card from "../components/Card";

export default class CardCollection extends Component {
  render() {
    const { displayedCards } = this.props;

    return (
      <div className="CardCollection row justify-content-center">
        {displayedCards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    );
  }
}
