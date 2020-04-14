import React from "react";
import axios from "../api";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Modal from "./Modal";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      username: "",
      password: "",
      re_enter_password: "",
      security_question: "",
      security_question_answer: "",
      show: false,
      modal_text: "",
      isRegSuccess: false
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = async () => {
    await this.setState({ show: false });
    if (this.state.isRegSuccess) {
      let path = `/`;
      this.props.history.push(path);
    }
  };

  registerUser = async ({
    full_name,
    username,
    password,
    re_enter_password,
    security_question,
    security_question_answer
  }) => {
    console.log(this.state);

    if (password !== re_enter_password) {
      // alert("Password and Re-enter Password does not match")
      await this.setState({
        modal_text: "Password and Re-enter Password does not match"
      });
      this.showModal();
      return;
    }

    await axios
      .post("/auth/signup", {
        full_name,
        username,
        password,
        security_question,
        security_question_answer
      })
      .then(async resp => {
        if (resp.data.status === 1) {
          this.setState({
            full_name: "",
            username: "",
            password: "",
            re_enter_password: "",
            security_question: "",
            security_question_answer: ""
          });
          await this.setState({
            modal_text: "User Registration Successful.",
            isRegSuccess: true
          });
          this.showModal();
        } else {
          // alert(resp.data.message + "\n" + resp.data.missing_params);
          let missing_params = resp.data.missing_params ? resp.data.missing_params : ''
          await this.setState({
            modal_text: resp.data.message + "\n" + missing_params
          });
          this.showModal();
        }
      })
      .catch(async err => {
        if (err) {
          console.log("ERROR", err);
          // alert("SOMETHHING WENT WRONG");
          await this.setState({
            modal_text: "SOMETHHING WENT WRONG" + err.message
          });
          this.showModal();
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
                  <h2 className="title">New User</h2>

                  <div className="input-group">
                    <label className="label">Full Name</label>
                    <input
                      type="text"
                      maxLength={12}
                      className="input--style-4"
                      name="full_name"
                      value={this.state.full_name}
                      placeholder="Enter Full Name"
                      onChange={event => {
                        this.setState({ full_name: event.target.value });
                      }}
                    />{" "}
                  </div>

                  <div className="input-group">
                    <label className="label">Username or Email </label>
                    <input
                      className="input--style-4"
                      name="username"
                      required
                      type="email"
                      placeholder="Enter email"
                      value={this.state.username}
                      onChange={event => {
                        this.setState({ username: event.target.value });
                      }}
                    />

                    <div className="input-group">
                      <label className="label">Password</label>
                      <input
                        className="input--style-4"
                        type="password"
                        required
                        name="password"
                        placeholder="Enter password"
                        id="password"
                        value={this.state.password}
                        onChange={event => {
                          this.setState({ password: event.target.value });
                        }}
                      />
                    </div>
                    <div className="input-group">
                      <label className="label">Re-enter Password</label>
                      <input
                        className="input--style-4"
                        type="password"
                        name="password"
                        placeholder="Re-enter password"
                        value={this.state.re_enter_password}
                        onChange={event => {
                          this.setState({
                            re_enter_password: event.target.value
                          });
                        }}
                      />
                    </div>

                    <div className="input-group">
                      <select
                        className="browser-default custom-select"
                        onChange={event => {
                          this.setState({
                            security_question: event.target.value
                          });
                        }}
                      >
                        <option defaultValue="">Select questions</option>
                        <option value="What is your Favroite game ?">
                          What is your Favroite game ?
                        </option>
                        <option value="What is your favroite cartoon show?">
                          What is your favroite cartoon show?
                        </option>
                        <option value="What is your favroite City?">
                          What is your favroite City?
                        </option>
                      </select>
                      <br />
                      <br />
                      <br />
                      <input
                        className="input--style-4"
                        type="text"
                        placeholder="Enter Answer"
                        value={this.state.security_question_answer}
                        onChange={event => {
                          this.setState({
                            security_question_answer: event.target.value
                          });
                        }}
                      />
                    </div>

                    <div>
                      {" "}
                      <button
                        className="btn btn-success"
                        type="submit"
                        onClick={() => {
                          this.registerUser(this.state);
                        }}
                      >
                        Submit
                      </button>
                    </div> 
                    <div>
                      <Link to="/login">
                        <button className="btn btn--green" type="button">
                          Already Registered !
                        </button>
                      </Link>
                    </div><br/><br/><br/>
                    <div>
                      <a href="index.html">
                        <button className="btn btn--green" type="button">
                          Back to Homepage
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Jquery JS*/}
            {/* Vendor JS*/}
            {/* Main JS*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
