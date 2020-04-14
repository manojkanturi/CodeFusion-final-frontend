import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Modal from "./Modal";
import { getLoginDetails, removeLoginDetails } from "../helpers/Store";

class NavBar extends React.Component {
  constructor(props) {
    // console.log("this.props :", props);
    super(props);
    this.state = {
      isLoggedIn: false,
      username: null,
      full_name: null,
      show: false
    };
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
    // hashHistory.push("/");
    this.props.history.push("/");
  };
  componentDidMount() {
    let { username, full_name } = getLoginDetails();
    console.log("username :", username);
    console.log("full_name :", full_name);
    if (
      username &&
      username !== "" &&
      username !== "undefined" &&
      full_name &&
      full_name !== "" &&
      username !== "undefined"
    ) {
      this.setState({ isLoggedIn: true, username, full_name });
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <Modal
          modalText="Log Out successful."
          show={this.state.show}
          handleClose={this.hideModal}
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
          integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
          crossOrigin="anonymous"
        />
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-light"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <div>
          <Link to="/" className="nav-link">
            <img
              src="/images/logo.png"
              className="d-inline-block align-top"
              alt="Logo"
              
              width={150}
              height={50}
            />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/editor/NA" className="nav-link">
                  Quick Run
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Practice
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/showquestion" className="dropdown-item">
                    Take a Challenge
                  </Link>
                <Link to="/getprepare" className="dropdown-item">
                    Prepare For Placement
                  </Link>
                <Link to="/prepareplacement" className="dropdown-item">
                    Pogramming Questions
                  </Link>
                  
                 <Link to="/knowskills" className="dropdown-item">
                    Know your Skills
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/rules" className="nav-link">
                  Rules
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/view_results" className="nav-link">
                  Result
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Help
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/faq" className="dropdown-item" href="#">
                    Frequently asked Questions
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                {this.state.isLoggedIn ? (
                  <span
                    style={{ cursor: "pointer" }}
                    className="nav-link"
                    onClick={async () => {
                      await removeLoginDetails();
                      await this.showModal();
                      await this.setState({
                        isLoggedIn: false,
                        username: null,
                        full_name: null
                      });
                    }}
                  >
                    Welcome,{" "}
                    <b style={{ color: "green" }}>
                      {this.state.full_name.charAt(0).toUpperCase() +
                        this.state.full_name.slice(1)}{" "}
                    </b>
                    &nbsp;&nbsp;&nbsp;
                    <i className="fas fa-sign-in-alt" /> Sign Out
                  </span>
                ) : (
                  <Link to="/login" className="nav-link">
                    <i className="fas fa-sign-in-alt" /> Sign In
                  </Link>
                )}
              </li>
              {this.state.isLoggedIn ? null : (
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    <i className="fas fa-user-plus" /> Sign Up
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(NavBar);
