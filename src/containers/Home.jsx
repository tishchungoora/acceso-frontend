import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="Home container-fluid">
        <div id="banner" className="row justify-content-center mb-5"></div>
        <div className="row justify-content-center mb-5">
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
        <div className="row justify-content-center">
          <div className="col-sm-5 text-center">
            <p className="lead mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacinia purus id erat vehicula, at tincidunt sapien semper. Donec
              fringilla, libero non pulvinar iaculis, lacus lorem porttitor
              lorem, a bibendum felis sem at nibh. Nullam augue est, semper ac
              nunc et, faucibus pretium turpis. Suspendisse eget pretium felis,
              vitae efficitur justo.
            </p>
          </div>
          <div className="col-sm-5 text-center">
            <p className="lead mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacinia purus id erat vehicula, at tincidunt sapien semper. Donec
              fringilla, libero non pulvinar iaculis, lacus lorem porttitor
              lorem, a bibendum felis sem at nibh. Nullam augue est, semper ac
              nunc et, faucibus pretium turpis. Suspendisse eget pretium felis,
              vitae efficitur justo.
            </p>
          </div>
        </div>
        <hr />
        <div className="row justify-content-center m-5">
          <h1 className="display-5 text-info">Ready?</h1>
          <button className="btn btn-info ml-5">Let's get started...</button>
        </div>
      </div>
    );
  }
}
