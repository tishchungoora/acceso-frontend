import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "../containers/Home";
import PecsBoardPage from "../containers/PecsBoardPage";
import SavedBoardsPage from "../containers/SavedBoardsPage";
import ResourcesPage from "../containers/ResourcesPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import API from "../adapters/API";

export default class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    API.validateUser()
      .then(user => this.setUser(user))
      .catch(console.error);
  }

  setUser = user => {
    this.setState({ user: user });
  };

  handleLogin = loginData => {
    API.login(loginData).then(user => this.setUser(user));
  };

  handleSignup = () => {};

  render() {
    const { handleLogin } = this;
    const { user } = this.state

    return (
      <Router>
        <div className="App">
          {this.state.user && <span>Hello, {this.state.user.first_name}!</span>}
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/pecs-board"
            render={routeProps => (
              <PecsBoardPage {...routeProps} user={user} />
            )}
          />
          <Route exact path="/saved-boards" component={SavedBoardsPage} />
          <Route exact path="/resources" component={ResourcesPage} />
          <Route
            exact
            path="/login"
            render={routeProps => (
              <LoginPage {...routeProps} login={handleLogin} />
            )}
          />
          <Route
            exact
            path="/signup"
            render={routeProps => (
              <SignupPage {...routeProps} signup={handleLogin} />
            )}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}
