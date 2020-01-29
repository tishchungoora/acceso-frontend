import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

export default class HomeCarousel extends Component {
  render() {
    return (
      <div id="banner" className="mb-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../assets/acceso-banner-1.png")}
              alt="Banner 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../assets/acceso-banner-2.png")}
              alt="Banner 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../assets/acceso-banner-3.png")}
              alt="Banner 3"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
