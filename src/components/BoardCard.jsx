import React, { Component } from "react";

export default class BoardCard extends Component {
  render() {
    const { card, removeCard } = this.props;

    return (
      <div className="BoardCard card ml-3 mr-3 mb-3 shadow">
        <img className="card-img-top" src={card.image_url} alt={card.title} />
        <div className="btnArea text-center">
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => removeCard(card)}
          >
            <i className="fas fa-minus"></i>
          </button>
        </div>
      </div>
    );
  }
}
