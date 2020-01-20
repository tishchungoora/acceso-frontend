import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="Home container-fluid">
        <div id="banner" className="row justify-content-center mb-4">
          <img
            className="container-fluid"
            src={require("../assets/banner.jpeg")}
            alt="Acceso banner"
          />
          <p>Source: https://pecsusa.com/</p>
        </div>
        <div className="row justify-content-center m-2">
          <div className="row text-center">
            <h2>
              The no. 1 web app for communicating intention and emotion with
              cards
            </h2>
          </div>
          <div className="row m-2 mt-4">
            <div className="col-sm-4">
              <p>
                <b>acceso</b> is an easy-to-use web application aimed primarily
                at parents and carers needing to communicate intention and
                emotion with non-verbal autistic individuals.
              </p>
            </div>
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-1">
                  <h1 className="text-success">&#10122;</h1>
                </div>
                <div className="col-sm-10 ml-1 mt-2">
                  <p>Select PECS cards to place on a board</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-1">
                  <h1 className="text-success">&#10123;</h1>
                </div>
                <div className="col-sm-10 ml-1 mt-2">
                  <p>Show the board or play the audio to communicate</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-1">
                  <h1 className="text-success">&#10124;</h1>
                </div>
                <div className="col-sm-10 ml-1 mt-2">
                  <p>Save the board for quick access in future</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <p>
                <b>acceso</b> can also be used as an educational and
                communication tool by young children who are yet to fully
                develop speech but capable of communicating through visual
                methods.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row justify-content-center mt-5">
          <iframe
            title="introduction"
            width="800"
            height="450"
            src="https://www.youtube.com/embed/Lk4qs8jGN4U"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <hr />
        <div className="container-fluid mt-5 mb-5">
          <div className="row justify-content-center">
            <h1 className="display-5 text-info mb-4 text-center">
              Ready to build your first PECS board?
            </h1>
          </div>
          <div className="row justify-content-center">
            <Link to="/pecs-board">
              <button className="btn btn-info btn-lg">
                Let's get started...
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
