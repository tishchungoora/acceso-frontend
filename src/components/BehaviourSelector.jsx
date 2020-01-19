import React, { Component } from "react";

export default class BehaviourSelector extends Component {
  render() {
    const { behaviours, handleFilter } = this.props;

    return (
      <div className="BehaviourSelector row justify-content-center">
        {behaviours.map(behaviour => (
          <div className={behaviour.name + " form-check form-check-inline"} key={behaviour.id}>
            <input
              className="form-check-input"
              type="radio"
              name="behaviours"
              id={behaviour.name}
              value={behaviour.name}
              onClick={event => handleFilter(event.target.value)}
            />
            <label className="form-check-label" htmlFor={behaviour.name}>
              {behaviour.name}
            </label>
          </div>
        ))}
        <button
            className="Clear btn btn-primary m-2"
            type="submit"
            title="Clear"
          >
            <i className="fas fa-times"></i>
          </button>
      </div>
    );
  }
}
