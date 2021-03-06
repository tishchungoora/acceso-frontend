import React, { Component } from "react";
import BoardCard from "../components/BoardCard";
import Save from "../components/Save";

export default class PecsBoard extends Component {
  render() {
    const {
      cardsOnBoard,
      removeCard,
      resetBoard,
      user,
      displaySuccessAlert
    } = this.props;

    return (
      <div className="PecsBoard">
        <div className="row justify-content-center">
          <h1>PECS board</h1>
        </div>
        <div className="row justify-content-center m-2">
          {cardsOnBoard.length === 0 ? (
            <p className="lead text-center">
              <i className="fas fa-arrow-circle-right"></i> Select up to 6 PECS
              cards by searching or filtering by category
            </p>
          ) : (
            <p className="lead text-center">
              <i className="fas fa-arrow-circle-right"></i> Play the sequence,
              edit,{" "}
              {user ? (
                <span>clear or save the board</span>
              ) : (
                <span>or clear the board</span>
              )}
            </p>
          )}
        </div>
        <div className="BoardCards justify-content-center">
          {cardsOnBoard.map((card, index) => (
            <BoardCard
              key={card.id + index}
              card={card}
              removeCard={removeCard}
            />
          ))}
        </div>
        {cardsOnBoard.length === 0 ? (
          true
        ) : (
          <div className="row mt-3 justify-content-center">
            <button className="btn btn-danger m-2" onClick={() => resetBoard()}>
              <i className="fas fa-eraser"></i> Clear the board
            </button>
            {user && (
              <Save
                cardsOnBoard={cardsOnBoard}
                displaySuccessAlert={displaySuccessAlert}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}
