import React, { Component } from "react";

export default class BoardCard extends Component {
  render() {
    const { card, removeCard } = this.props;

    return (
      <div className="BoardCard card m-3 shadow">
        <img className="card-img-top" src={card.image_url} alt={card.title} />
        <div className="card-body text-center">
          <button className="btn btn-danger btn-lg" onClick={() => removeCard(card)}>
            <span className="oi oi-minus"></span>
          </button>
        </div>
      </div>
    );
  }
}