import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { card } = this.props;

    return (
      <div className="card w-25 m-3 shadow">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <em>Category: {card.category.name}</em>
          </li>
        </ul>

        <img
          className="card-img-top"
          src="{card.image_url}"
          alt={card.title}
        />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">
            {card.description.length > 150
              ? card.description.slice(0, 150) + "..."
              : card.description}
          </p>
        </div>
        <div className="card-body">
          <button className="btn btn-info">
            Learn more
          </button>
        </div>
      </div>
    );
  }
}
