import React from "react";
import axios from "../api";
import NavBar from "./NavBar";
import Modal from './Modal'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      re_enter_password: "",
      security_question: "",
      security_question_answer: "",
      isUserValid: false,
      _id: "",
      show: false,
      modal_text: ''
    };
  }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = async () => {
    await this.setState({ show: false });
    // if(isPasswordResetSuccess){
    //   let path = `/login`;
    //   this.props.history.push(path);
    // }
  }

  validateUser = async ({
    username,
    security_question,
    security_question_answer
  }) => {
    console.log(this.state);
   await axios
      .post("/auth/validate_username_security_question", {
        username,
        security_question,
        security_question_answer
      })
      .then(async resp => {
        if (resp.data.status === 1) {
          await this.setState({
            isUserValid: true,
            _id: resp.data._id,
            username: resp.data.username,
            modal_text: 'Username is validated successfully, Now you can reset your password.'
          });
          //alert("User is validated successfully. Now you can reset password.");
          console.log("this.state[312] :", this.state);
        } else {
          await this.setState({
            modal_text: 'Failed to Validate Username.\nInvalid Username or Security Question OR Answer'
          });
          // alert(
            //   "Failed to Validate Username.\nInvalid Username or Security Question OR Answer"
            // );
          }
        this.showModal()
      })
      .catch(async err => {
        if (err) {
          console.log("ERROR", err);
          await this.setState({
            modal_text: `SOMETHHING WENT WRONG ${err.message}`
          });
          this.showModal()
          // alert("SOMETHHING WENT WRONG");
        }
      });
  };

  resetPassword = async ({ username, _id, password, re_enter_password }) => {
    console.log(this.state);
    if (password !== re_enter_password) {
      // alert("Password and Re-enter Password does not match");
      await this.setState({
        modal_text: `Password and Re-enter Password does not match.`
      });
      this.showModal()
      return;
    }

   await axios
      .post("/auth/update_new_password", {
        username,
        _id,
        password
      })
      .then(async resp => {
        if (resp.data.status === 1) {
          await this.setState({
            username: "",
            password: "",
            re_enter_password: "",
            security_question: "",
            security_question_answer: "",
            isUserValid: false,
            _id: "",
            modal_text: "Password reset successful. Now you can login with your new password."
          });
          this.showModal()
          console.log("this.state[312] :", this.state);
          // this.props.history.push(`/login`);
        } else {
          await this.setState({
            modal_text: `Failed to Update Password.`
          });
          this.showModal()
          // alert("Failed to Update Password.");
        }
      })
      .catch(async err => {
        if (err) {
          console.log("ERROR", err);
          // alert("SOMETHHING WENT WRONG");
          await this.setState({
            modal_text: `SOMETHHING WENT WRONG ${err.message}`
          });
          this.showModal()
        }
      });
  };

  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
        
          <Modal modalText={this.state.modal_text} show={this.state.show} handleClose={this.hideModal} /> 
 }
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
                  <h2 className="title">Forgot Password ?</h2>

                  <div className="input-group">
                    <label className="label">Username</label>
                    <input
                      type="text"
                      required
                      className="input--style-4"
                      value={this.state.username}
                      placeholder="Enter Username"
                      onChange={event => {
                        this.setState({ username: event.target.value });
                      }}
                    />{" "}
                  </div>

                  <label className="label">Select your security question</label>
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
                      placeholder="Enter Your Answer"
                      value={this.state.security_question_answer}
                      onChange={event => {
                        this.setState({
                          security_question_answer: event.target.value
                        });
                      }}
                    />

                    <div>
                      <br />{" "}
                      <button
                        className="btn btn-success"
                        type="submit"
                        onClick={() => {
                          this.validateUser(this.state);
                        }}
                      >
                        Submit
                      </button>
                    </div>
                    <div></div>
                  </div>

                  <div className="input-group">
                    <div className="input-group">
                      <label className="label">New Password</label>
                      <input
                        disabled={!this.state.isUserValid}
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
                        disabled={!this.state.isUserValid}
                        className="input--style-4"
                        type="password"
                        placeholder="Re-enter password"
                        value={this.state.re_enter_password}
                        onChange={event => {
                          this.setState({
                            re_enter_password: event.target.value
                          });
                        }}
                      />
                    </div>

                    <div>
                      {" "}
                      <button
                        disabled={!this.state.isUserValid}
                        style={
                          !this.state.isUserValid
                            ? { cursor: "not-allowed" }
                            : { cursor: "pointer" }
                        }
                        className="btn btn-danger"
                        type="submit"
                        onClick={() => {
                          this.resetPassword(this.state);
                        }}
                      >
                        Reset Password
                      </button>
                    </div>
                    <div></div>
                    <div></div>
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
