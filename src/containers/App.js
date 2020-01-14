import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "../containers/Home";
import PecsBoardPage from "../containers/PecsBoardPage";
import PrintCardsPage from "../containers/PrintCardsPage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/pecs-board" component={PecsBoardPage} />
          <Route exact path="/print-cards" component={PrintCardsPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}