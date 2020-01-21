import React, { Component } from "react";

export default class SignupPage extends Component {
  state = {};

  render() {
    return (
      <div className="signup">
        <div className="signup-container mt-5">
          <h2 className="text-center mb-3">Register with us</h2>
          <form className="signup-form">
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="First name"
                name="firstName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Last name"
                name="lastName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Enter password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                name="password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="passwordConfirmation">Confirm password</label>
              <input
                type="password"
                className="form-control"
                id="passwordConfirmation"
                placeholder="Enter your password again"
                name="passwordConfirmation"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
