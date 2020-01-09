import React, { Component } from "react";
import Card from "../components/Card";

export default class CardCollection extends Component {
  render() {
    const { cards } = this.props;

    return (
      <div className="row justify-content-center">
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    );
  }
}
