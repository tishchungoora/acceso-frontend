import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { card, selectedCard } = this.props;

    return (
      <div className="card m-3 shadow">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <em>Category: {card.category.name}</em>
          </li>
        </ul>

        <img className="card-img-top" src={card.image_url} alt={card.title} />
        <div className="card-body text-center">
          <button className="btn btn-warning" onClick={() => selectedCard(card)}>
            <span className="oi oi-plus"></span>
          </button>
        </div>
      </div>
    );
  }
}
