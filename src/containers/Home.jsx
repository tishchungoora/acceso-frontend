import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="Home container-fluid">
        <div id="banner" className="row justify-content-center mb-4">
          <img className="container-fluid" src={require('../assets/banner.jpeg')} alt="Acceso banner" />
          <p>Source: https://pecsusa.com/</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-10 mb-2">
            <h2>The web app for communicating intention and emotion with cards</h2>
            <p>
              <b>acceso</b> is an easy-to-use web application aimed primarily at parents
              and carers needing to communicate intention and emotion with
              non-verbal autistic individuals.
            </p>
            <p>
              <b>acceso</b> can also be used as an educational and communication
              tool by young children who are yet to fully develop speech but
              capable of communicating through visual methods.
            </p>
            <p>
              <b>acceso</b> provides a set of Picture Exchange Communication
              System (PECS) cards. The cards can be laid out on a board, in
              small batches at a time, and the app is then able to play back the
              sequence of the PECS cards in audio form.
            </p>
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
            <h1 className="display-5 text-info mb-4">
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
