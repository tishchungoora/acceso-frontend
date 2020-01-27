import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    const { cardNumber } = this.props;

    return (
      <div className="Home container-fluid">
        <div id="banner" className="text-center mb-4">
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
              The no. 1 web app for exchanging ideas, emotion & intention with
              cards
            </h2>
          </div>
          <div className="row m-2 mt-4">
            <div className="col-sm-4">
              <div className="row justify-content-center">
                <p className="lead">
                  <b>WHO IS IT FOR?</b>
                </p>
              </div>
              <div className="row justify-content-center">
                <h1>
                  <i className="fas fa-users text-info"></i>
                </h1>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-10 mt-2 text-center">
                  <p>
                    Social workers, parents and carers who work with non-verbal autistic individuals to help them communicate intention and emotion.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="row justify-content-center">
                <p className="lead">
                  <b>HOW IT WORKS</b>
                </p>
              </div>
              <div className="row justify-content-center">
                <h1 className="text-success">&#10122;</h1>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-10 text-center">
                  <p>
                    Select from over {parseInt(cardNumber / 10, 10) * 10} PECS
                    cards to compose a board.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <h1 className="text-success">&#10123;</h1>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-10 text-center">
                  <p>
                    Show the board or play the audio to communicate ideas,
                    intention and emotion.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <h1 className="text-success">&#10124;</h1>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-10 text-center">
                  <p>Save the board for quick access in future.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="row justify-content-center">
                <p className="lead">
                  <b>OTHER USE CASES</b>
                </p>
              </div>
              <div className="row justify-content-center">
                <h1>
                  <i className="fas fa-ellipsis-h text-secondary"></i>
                </h1>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-10 ml-2 mt-2 text-center">
                  <p>
                    Suitable for highly functional autistic individuals with
                    impaired speech.
                  </p>
                  <p>
                    Serves as educational and communication tool for young
                    children who may have learning difficulties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row justify-content-center mt-5">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="introduction"
              src="https://www.youtube.com/embed/Lk4qs8jGN4U"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
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
