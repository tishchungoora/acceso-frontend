import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  handleLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    const { user, handleLogout } = this.props;

    return (
      <div id="Navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            <img src="./acceso-logo-white.png" alt="Acceso" height="35px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pecs-board">
                  PECS Board
                </Link>
              </li>
              {user && (<li className="nav-item">
                <Link className="nav-link" to="/saved-boards">
                  Saved Boards
                </Link>
              </li>)}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign up
                </Link>
              </li> */}
            </ul>
            {user && (
              <span className="greeting mr-3 text-light">Howdy {user.first_name}!</span>
            )}
            {user ? (
              <form className="form-inline my-2 my-lg-0">
                <Link to="/">
                  <button className="btn btn-sm btn-danger my-2 my-sm-0" onClick={handleLogout}>
                    Log out
                  </button>
                </Link>
              </form>
            ) : (
              <form className="form-inline my-2 my-lg-0">
                <Link to="/login">
                  <button className="btn btn-sm btn-warning my-2 my-sm-0">
                    Log in
                  </button>
                </Link>
              </form>
            )}
          </div>
        </nav>
      </div>
    );
  }
}
