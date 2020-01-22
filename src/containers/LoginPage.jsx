import React, { Component } from "react";

export default class LoginPage extends Component {
  state = {
    loginData: {}
  };

  handleLoginChange = event => {
    this.setState({
      loginData: {
        ...this.state.loginData,
        [event.target.name]: event.target.value
      }
    });
  };

  handleLoginSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.loginData);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="login m-5">
        <div className="row justify-content-center">
          <div className="login-container mt-5 col-sm-4">
            <h2 className="text-center mb-5">Log into your account</h2>
            <form className="login-form" onSubmit={this.handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  required
                  onChange={this.handleLoginChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  name="password"
                  required
                  onChange={this.handleLoginChange}
                />
              </div>
              <div className="row justify-content-center mt-4">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
