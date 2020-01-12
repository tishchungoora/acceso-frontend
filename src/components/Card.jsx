import React, { Component } from "react";
import CardDetails from "./CardDetails";

export default class Card extends Component {
  render() {
    const { card, selectCard } = this.props;

    return (
      <div className="card m-3 shadow">
        <button
          type="button"
          className="btn btn-link"
          data-toggle="modal"
          data-target={"#" + card.id}
          onClick={event => console.log(event.target)}
        >
          Learn more
        </button>
        <CardDetails card={card} />

        <img className="card-img-top" src={card.image_url} alt={card.title} />
        <div className="card-body text-center">
          <button
            className="btn btn-warning btn-lg"
            onClick={() => selectCard(card)}
          >
            <span className="oi oi-plus"></span>
          </button>
        </div>
      </div>
    );
  }
}
