import React, { Component } from "react";
import axios from "../api";
import "../css/Challenge.css";
import NavBar from "./NavBar";
import Modal from "./Modal";
import { getLoginDetails } from "../helpers/Store";

class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      input: "",
      output: "",
      constraints: "",
      sample_input: "",
      sample_output: "",
      private_input: "",
      private_output: "",
      time_limit: "",
      show: false,
      modal_text: "",
      isLoggedIn: false,
      isChallengeExpired: false,
      isAdmin: false
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  async componentDidMount() {
    // let challenge_ids = sessionStorage.getItem("challenge_ids");
    // let expired_challenges = JSON.parse(challenge_ids)

    // if (expired_challenges.challenge_ids.includes(this.props.match.params.id)) {
    //   await this.setState({ isChallengeExpired: true });
    // }

    let { username, full_name, isAdmin } = await getLoginDetails();
    console.log("username12 :", username);
    if (
      username === "" ||
      username === "undefined" ||
      username === undefined ||
      username === "null" ||
      username === null ||
      full_name === "" ||
      full_name === "null" ||
      full_name === null ||
      full_name === "undefined" ||
      full_name === undefined
    ) {
      await this.setState({
        modal_text:
          "Please Sign In to access this page. All fields will be disabled until you login.",
        isLoggedIn: false
      });
      await this.showModal();
      console.log("this.state1212 :", this.state);
      // let path = `/`;
      // this.props.history.push(path);
      return;
    } else {
      this.setState({ isLoggedIn: true });
    }

    console.log("this.props :", this.props);

    await axios
      .post("/questions/search", {
        _id: this.props.match.params.id
      })
      .then(async res => {
        console.log(res.data);
        if (res.data.result.length > 0) {
          this.setState({
            title: res.data.result[0].title,
            description: res.data.result[0].description,
            input: res.data.result[0].input,
            output: res.data.result[0].output,
            constraints: res.data.result[0].constraints,
            sample_input: res.data.result[0].sample_input,
            sample_output: res.data.result[0].sample_output,
            private_input: res.data.result[0].private_input,
            private_output: res.data.result[0].private_output,
            time_limit: res.data.result[0].time_limit,
            isAdmin: JSON.parse(isAdmin)
          });
          console.log("this.state :", this.state);
        } else {
          this.setState({
            modal_text: "Invalid Access to Page",
            isLoggedIn: false
          });
          this.showModal();
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  renderPrivateTestCases() {
    if (this.state.isAdmin) {
      return (
        <span>
          <h2>Private Input</h2>
          <ul>
            <li>
              <h4>
                <div>{JSON.stringify(this.state.private_input)}</div>
              </h4>
            </li>
          </ul>
          <hr />
          <h2>Private Output</h2>
          <ul>
            <li>
              <h4>
                <div>{JSON.stringify(this.state.private_output)}</div>
              </h4>
            </li>
          </ul>
        </span>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Modal
          modalText={this.state.modal_text}
          show={this.state.show}
          handleClose={this.hideModal}
        />
        <br />
        <br />
        <br />
        <br />

        <div>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

          <title>Welcome to you in Challenge</title>

          <div className="container">
            <h1 style={{ fontWeight: "bold" }}>
              <div>{this.state.title}</div>
            </h1>
            <hr />
            <h2>Description</h2>
            <ul>
              <li>
                <h4>
                  <div>{this.state.description}</div>
                </h4>
              </li>
            </ul>
            <hr className="line" />
            <h2>Input</h2>
            <ul>
              <li>
                <h4>
                  <div>{this.state.input}</div>
                </h4>
              </li>
            </ul>
            <hr />
            <h2>Output</h2>
            <ul>
              <li>
                <h4>
                  <div>{this.state.output}</div>
                </h4>
              </li>
            </ul>
            <hr />
            <h2>Constraints</h2>
            <ul>
              <li>
                <h4>
                  <div>{this.state.constraints}</div>
                </h4>
              </li>
            </ul>
            <hr />
            <h2>Sample Input</h2>
            <ul>
              <li>
                <h4>
                  <div>{this.state.sample_input}</div>
                </h4>
              </li>
            </ul>
            <hr />
            <h2>Sample Output</h2>
            <ul>
              <li>
                <h4>
                  <div>{this.state.sample_output}</div>
                </h4>
              </li>
            </ul>
            <hr />
            {this.renderPrivateTestCases()}
            <h2>Time Limit</h2>
            <ul>
              <li>
                <h4>
                  <div>{this.state.time_limit}</div>
                </h4>
              </li>
            </ul>
            <button
              disabled={
                !this.state.isLoggedIn
                  ? false
                  : !this.state.isChallengeExpired
                  ? false
                  : true
              }
              style={
                !this.state.isLoggedIn
                  ? { cursor: "not-allowed" }
                  : this.state.isChallengeExpired
                  ? { cursor: "not-allowed" }
                  : { cursor: "pointer" }
              }
              type="button"
              className="btn btn-primary"
              onClick={() => {
                this.props.history.push(
                  `/editor/${this.props.match.params.id}`
                );
              }}
            >
              Take Challenge
            </button>{" "}
            &nbsp;&nbsp;&nbsp;
            <button
              onClick={() => {
                this.props.history.push("/showquestion");
              }}
              type="button"
              className="btn btn-warning"
            >
              Cancel
            </button>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Challenge;
