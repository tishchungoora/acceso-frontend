import React, { Component } from "react";
// import { Carousel } from "react-bootstrap";

export default class ResourcesPage extends Component {
  render() {
    return (
      <div className="ResourcesPage container-luid">
        <div className="row justify-content-center mt-5">
          <div
            id="carousel"
            className="carousel slide"
            data-ride="carousel"
            data-interval="false"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carousel"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carousel"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <iframe
                  title="intro to autism"
                  width="800"
                  height="450"
                  src="https://www.youtube.com/embed/Lk4qs8jGN4U"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="carousel-item">
                <iframe
                  width="800"
                  height="450"
                  title="ted talk on autism"
                  src="https://www.youtube.com/embed/wKlMcLTqRLs"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="carousel-item">
                <iframe
                  width="800"
                  height="450"
                  title="ted talk on autism"
                  src="https://www.youtube.com/embed/wKlMcLTqRLs"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
