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

  handleTestAccountDetail = () => {
    let email = document.getElementById("email");
    email.value = "j.doe@gmail.com";
    let password = document.getElementById("password");
    password.value = "833Fw.U7*KsM";
    this.setState({
      loginData: { email: email.value, password: password.value }
    });
  };

  render() {
    return (
      <div className="LoginPage m-5">
        <div className="row justify-content-center">
          <div className="login-container mt-5 col-sm-4">
            <h2 className="text-center">Log into your account</h2>
            <div className="row justify-content-center mb-5">
              <button
                type="submit"
                className="btn btn-link"
                onClick={() => this.handleTestAccountDetail()}
              >
                Use test account
              </button>
            </div>
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
