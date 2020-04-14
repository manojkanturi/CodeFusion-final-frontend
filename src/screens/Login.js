import React from "react";
import axios from "../api";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Modal from "./Modal";
import { setLoginDetails } from "../helpers/Store";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      show: false,
      modal_text: "",
      isLoginSuccess: false
    };
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = async () => {
    await this.setState({ show: false });
    if(this.state.isLoginSuccess){
      let path = `/`;
      this.props.history.push(path);
    }
  };

  login = async ({ username, password }) => {
    await axios
      .post("/auth/signin", {
        username,
        password
      })
      .then(async resp => {
        if (resp.data.status === 1) {
          await setLoginDetails(
            resp.data.result.username,
            resp.data.result.full_name,
            resp.data.result.hasOwnProperty("isAdmin")
              ? resp.data.result.isAdmin
              : false
          );
          await this.setState({ modal_text: "LOGIN SUCCESSFUL", isLoginSuccess: true });
          await this.showModal();
        }
        if (resp.data.status === 0) {
          await this.setState({
            modal_text: `FAILED TO LOGIN: ${resp.data.message}`
          });
          this.showModal();
          // alert("INVALID USERNAME OR PASSWORD");
        }
      })
      .catch(async err => {
        if (err) {
          console.log("ERROR", err);
          await this.setState({
            modal_text: `SOMETHHING WENT WRONG: ${err.message}`
          });
          this.showModal();
          // alert("SOMETHHING WENT WRONG");
        }
      });
  };

  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
          <Modal
            modalText={this.state.modal_text}
            show={this.state.show}
            handleClose={this.hideModal}
          />

          <link href="css/main.css" rel="stylesheet" media="all" />
          <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div className="wrapper wrapper--w680">
              <div className="card card-4">
                <div className="card-body">
                  <img
                    style={{ display: "inline-flex" }}
                    src="images/logo.png"
                    alt="logo"
                    width={200}
                    height={75}
                  />
                  <h2 className="title">Sign In</h2>

                  <div className="input-group">
                    <label className="label">Username / Email </label>
                    <input
                      className="input--style-4"
                      type="email"
                      name="username"
                      value={this.state.username}
                      onChange={event => {
                        this.setState({ username: event.target.value });
                      }}
                      placeholder="Email address"
                      required
                      autoFocus
                    />

                    <div className="input-group">
                      <label className="label">Password</label>
                      <input
                        className="input--style-4"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={event => {
                          this.setState({ password: event.target.value });
                        }}
                        required
                      />
                    </div>

                    <div>
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          this.login(this.state);
                        }}
                        type="submit"
                      >
                        {" "}
                        <i className="fas fa-sign-in-alt" /> Sign In
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                      <Link to="/forgot_password">
                        {" "}
                        <button className="btn btn-warning " type="submit">
                          <i className="fas fa-lock" /> Forgot Password{" "}
                        </button>{" "}
                      </Link>
                      <br />
                      <br />
                      <Link to="/register">
                        <button
                          className="btn btn-primary"
                          type="button"
                          id="btn-signup"
                        >
                          <i className="fas fa-user-plus" /> Sign up{" "}
                        </button>{" "}
                      </Link>
                      &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                      <Link to="/">
                        {" "}
                        <button className="btn btn-dark" type="submit">
                          <i className="fas fa-home" /> Homepage
                        </button>{" "}
                      </Link>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
