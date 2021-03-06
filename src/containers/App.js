import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "../containers/Home";
import PecsBoardPage from "../containers/PecsBoardPage";
import SavedBoardsPage from "../containers/SavedBoardsPage";
import LoginPage from "./LoginPage";
import API from "../adapters/API";

export default class App extends Component {
  state = {
    user: null,
    cardNumber: null
  };

  setCardNumber = () => {
    API.fetchCards().then(data =>
      this.setState({
        cardNumber: data.length
      })
    );
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    API.validateUser()
      .then(user => this.setUser(user))
      .catch(console.error);
    this.setCardNumber();
  }

  setUser = user => {
    this.setState({ user: user });
  };

  handleLogin = loginData => {
    API.login(loginData).then(user => this.setUser(user));
  };

  handleLogout = () => {
    this.setState({ user: null });
    API.clearToken();
  };

  handleSignup = () => {};

  render() {
    const { handleLogin, handleLogout } = this;
    const { user, cardNumber } = this.state;

    return (
      <Router>
        <div className="App">
          <NavBar user={user} handleLogout={handleLogout} />
          <Route
            exact
            path="/"
            render={routeProps => (
              <Home {...routeProps} cardNumber={cardNumber} />
            )}
          />
          <Route
            exact
            path="/pecs-board"
            render={routeProps => <PecsBoardPage {...routeProps} user={user} />}
          />
          {user && (
            <Route
              exact
              path="/saved-boards"
              render={routeProps => (
                <SavedBoardsPage {...routeProps} user={user} />
              )}
            />
          )}
          <Route
            exact
            path="/login"
            render={routeProps => (
              <LoginPage {...routeProps} login={handleLogin} />
            )}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}
