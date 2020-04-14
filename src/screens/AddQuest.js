import React from "react";
import axios from "../api";
import NavBar from "./NavBar";
import Modal from "./Modal";
import { getLoginDetails } from "../helpers/Store";

class AddQuest extends React.Component {
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
      program_id: "",
      show: false,
      modal_text: "",
      isLoggedIn: false,
      isAdmin: false
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  addQuestion = async ({
    title,
    description,
    input,
    output,
    constraints,
    sample_input,
    sample_output,
    private_input,
    private_output,
    time_limit
  }) => {
    await axios
      .post("/questions/create", {
        title,
        description,
        input,
        output,
        constraints,
        sample_input,
        sample_output,
        private_input,
        private_output,
        time_limit
      })
      .then(async resp => {
        if (resp.data.status === 1) {
          // alert("QUESTION ADDED SUCCESSFULLY");
          await this.initializeState();
          await this.setState({ modal_text: "QUESTION ADDED SUCCESSFULLY" });
          this.showModal();
        } else {
          // alert("FAILED TO ADD QUESTION");
          await this.setState({
            modal_text: `FAILED TO ADD QUESTION: ${resp.data.message}`
          });
          this.showModal();
        }
      })
      .catch(async err => {
        if (err) {
          console.log("ERROR", err);
          // alert("SOMETHHING WENT WRONG");
          await this.setState({
            modal_text: `SOMETHHING WENT WRONG: ${err.message}`
          });
          this.showModal();
        }
      });
  };

  async componentDidMount() {
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
      await this.setState({ isLoggedIn: true, isAdmin: JSON.parse(isAdmin) });
      if (!this.state.isAdmin) {
        await this.setState({
          modal_text:
            "Unauthorized Access. Only Admin can view or modify this page. All fields will be disabled for to prevent from unauthorized access or modification."
        });
        this.showModal();
        return;
      }
    }

    await this.setState({ program_id: this.props.match.params.id });
    console.log("this.state :", this.state);
    console.log("this.props.match.params.id :", this.props.match.params.id);
    if (this.state.program_id !== "NA") {
      window.scrollTo(0, 0);
      await axios
        .post("/questions/search", {
          _id: this.state.program_id
        })
        .then(res => {
          console.log(res.data);
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
            time_limit: res.data.result[0].time_limit
          });
          console.log("this.state :", this.state);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  initializeState() {
    this.setState({
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
      program_id: ""
    });
  }

  updateQuestion = ({
    title,
    description,
    input,
    output,
    constraints,
    sample_input,
    sample_output,
    private_input,
    private_output,
    time_limit,
    program_id
  }) => {
    axios
      .post("/questions/update_questions", {
        question_id: program_id,
        title,
        description,
        input,
        output,
        constraints,
        sample_input,
        sample_output,
        private_input,
        private_output,
        time_limit
      })
      .then(async resp => {
        if (resp.data.status === 1) {
          // alert("QUESTION UPDATED SUCCESSFULLY");
          this.initializeState();
          await this.setState({ modal_text: "QUESTION UPDATED SUCCESSFULLY" });
          this.showModal();
        } else {
          // alert("FAILED TO UPDATE QUESTION");
          await this.setState({
            modal_text: `FAILED TO UPDATE QUESTION: ${resp.data.message}`
          });
          this.showModal();
        }
      })
      .catch(async err => {
        if (err) {
          console.log("ERROR", err);
          // alert("SOMETHHING WENT WRONG");
          await this.setState({
            modal_text: `SOMETHHING WENT WRONG: ${err.message}`
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
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="container">
            <form>
              <h3>
                {this.props.match.params.id !== "NA" ? "Update" : "Add"} a
                Question/Challenge
              </h3>
              <div className="form-group">
                <label htmlFor="Addquestion">Question title here</label>
                <input
                  disabled={ !this.state.isLoggedIn || !this.state.isAdmin ? true : false }
                  
                  type="text"
                  value={this.state.title}
                  name="title"
                  onChange={event => {
                    this.setState({ title: event.target.value });
                  }}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="desciption">Add question Desciption here</label>
                <textarea
                  disabled={ !this.state.isLoggedIn || !this.state.isAdmin ? true : false }
                  
                  name="description"
                  value={this.state.description}
                  onChange={event => {
                    this.setState({ description: event.target.value });
                  }}
                  cols={120}
                  rows={3}
                />
              </div>
              <div className="form-group">
                <label htmlFor="desciption">Add question Input here</label>
                <textarea
                  disabled={ !this.state.isLoggedIn || !this.state.isAdmin ? true : false }
                  
                  type="text"
                  value={this.state.input}
                  name="input"
                  onChange={event => {
                    this.setState({ input: event.target.value });
                  }}
                  cols={120}
                  rows={3}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="desciption">Add question Output here</label>
                <textarea
                  disabled={ !this.state.isLoggedIn || !this.state.isAdmin ? true : false }
                  
                  type="text"
                  value={this.state.output}
                  name="output"
                  onChange={event => {
                    this.setState({ output: event.target.value });
                  }}
                  cols={120}
                  rows={3}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="desciption">
                  Add question Constraints here
                </label>
                <textarea
                  disabled={ !this.state.isLoggedIn || !this.state.isAdmin ? true : false }
                  
                  type="text"
                  value={this.state.constraints}
                  name="constraints"
                  onChange={event => {
                    this.setState({ constraints: event.target.value });
                  }}
                  cols={120}
                  rows={3}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="desciption">
                  Add question Sample Input here
                </label>
                <textarea
                  disabled={ !this.state.isLoggedIn || !this.state.isAdmin ? true : false }
                  
                  type="text"
                  value={this.state.sample_input}
                  name="sample_input"
                  onChange={event => {
                    this.setState({ sample_input: event.target.value });
                  }}
                  cols={120}
                  rows={3}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="desciption">
                  Add question Sample Output here
                </label>
                <textarea
                  disabled={ !this.state.isLoggedIn || !this.state.isAdmin ? true : false }
                  
                  type="text"
                  value={this.state.sample_output}
                  name="sample_output"
                  onChange={event => {
                    this.setState({ sample_output: event.target.value });
                  }}
                  cols={120}
                  rows={3}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="privateinput">
                  Add question Private Input here
                </label>
                <textarea
                  disabled={ !this.state.isLoggedIn || !this.state.isAdmin ? true : false }
                  
                  type="text"
                  value={this.state.private_input}
                  name="private_input"
                  onChange={event => {
                    this.setState({ private_input: event.target.value });
                  }}
                  cols={120}
                  rows={3}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="privateoutput">
                  Add question Private Output here
                </label>
                <textarea
                  disabled={ !this.state.isLoggedIn || !this.state.isAdmin ? true : false }
                  
                  type="text"
                  value={this.state.private_output}
                  name="private_output"
                  onChange={event => {
                    this.setState({ private_output: event.target.value });
                  }}
                  cols={120}
                  rows={3}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="timelimit">Add question Time Limit here</label>
                <textarea
                  disabled={ !this.state.isLoggedIn || !this.state.isAdmin ? true : false }
                  type="text"
                  value={this.state.time_limit}
                  name="time_limit"
                  onChange={event => {
                    this.setState({ time_limit: event.target.value });
                  }}
                  cols={120}
                  rows={3}
                  className="form-control"
                />
              </div>
              <button
                style={
                  !this.state.isLoggedIn || !this.state.isAdmin
                    ? { cursor: "not-allowed" }
                    : { cursor: "pointer" }
                }
                disabled={
                  !this.state.isLoggedIn || !this.state.isAdmin ? true : false
                }
                type="button"
                className="btn btn-lg btn-success"
                onClick={() => {
                  this.props.match.params.id !== "NA"
                    ? this.updateQuestion(this.state)
                    : this.addQuestion(this.state);
                }}
              >
                Submit
              </button>
              &nbsp; &nbsp;
              <button
                onClick={() => {
                  this.props.history.push("/");
                }}
                type="button"
                className="btn btn-lg  btn-info"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
        <br /> <br />
      </div>
    );
  }
}

export default AddQuest;
