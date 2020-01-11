import React, { Component } from "react";
import PecsContainer from "./PecsContainer";
import PecsBoard from "./PecsBoard";
import Play from "../components/Play";

export default class PecsBoardPage extends Component {
  render() {
    return (
      <div className="PecsBoardPage container-fluid">
        <div className="PecsBoardArea row justify-content-center pt-3 mb-3">
          <div>
            <h1>Pecs board</h1>
          </div>
          <div>
            <PecsBoard />
          </div>
        </div>
        <div>
          <Play />
        </div>
        <hr className="mb-5"/>
        <div>
          <PecsContainer />
        </div>
      </div>
    );
  }
}
