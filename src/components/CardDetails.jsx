import React, { Component } from "react";

export default class CardDetails extends Component {
  render() {
    const { card } = this.props;

    return (
      <div
        className="modal fade"
        id={card.id}
        tabIndex="-1"
        role="dialog"
        aria-labelledby={card.title}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                  {card.title}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
