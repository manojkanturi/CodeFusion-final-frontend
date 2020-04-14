import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import axios from "../api";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "../css/Editor.css";
import NavBar from "./NavBar";
import Modal from "./Modal";
import { getLoginDetails } from "../helpers/Store";
require("codemirror/mode/javascript/javascript");
const samplePrograms = require("../helpers/DefaultPrograms");

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      program: "",
      inputs: "",
      title: "NA",
      description: "NA",
      input: "NA",
      output: "NA",
      constraints: "NA",
      sample_input: "NA",
      sample_output: "NA",
      private_input: "NA",
      private_output: "NA",
      time_limit: "NA",
      program_id: "",
      username: "",
      language_chosen: "C",
      loader: false,
      show: false,
      isLoggedIn: false,
      time_hours: "00",
      time_min: "30",
      time_sec: "00",
      time_up: false,
      modal_text: "",
      isRulesAccepted: false,
      isRulesShown: false,
      route: ''
    };
  }

  showModal =async (route) => {
    if(typeof route === 'string'){
      await this.setState({ show: true, route });
    }
    else{
      await this.setState({ show: true, isRulesShown: true });
    }
  };

  hideModal = async () => {
    await this.setState({ show: false });
    if(this.state.route!=='' && this.state.route === "/"){
      let path = this.state.route;
      this.props.history.push(path);
    }
    if(this.state.isRulesShown){
      // alert(this.state.isRulesShown)
      await this.setState({isRulesAccepted: true})
      await this.startTimer()
    }
  };
  startTimer(){
    if (
      !this.state.time_up &&
      this.props.match.params.id !== "NA" &&
      this.state.isRulesAccepted
      ) {
        var sec = setInterval(async () => {
          let time_sec = Number(this.state.time_sec);
          if (time_sec === 0) {
            await this.setState({ time_sec: "60" });
            time_sec = Number(this.state.time_sec);
          }
          time_sec--;
          this.setState(
            time_sec < 10 ? { time_sec: "0" + time_sec } : { time_sec }
            );
          }, 1000);
          
          var min = setInterval(async () => {
            let time_min = Number(this.state.time_min);
            let time_sec = Number(this.state.time_sec)
            let time_hours = Number(this.state.time_hours)
            if (time_min === 0 && time_sec === 0 && time_hours === 0) {
          this.setState({ time_min: "30" });
          clearInterval(sec);
          clearInterval(min);
          await this.setState({
            time_sec: "00",
            time_min: "00",
            time_up: true,
            modal_text:
            "Time is Up, Your code has been auto-submitted and now You cannot submit same program/challenge again. Better luck next time."
          });
          await this.handleProgramSubmit();
          // let expiredChallenges = JSON.parse(
            //   sessionStorage.getItem("challenge_ids")
            // );
            // expiredChallenges.challenge_ids.push(this.props.match.params.id);
            // sessionStorage.setItem(
          //   "challenge_ids",
          //   JSON.stringify(expiredChallenges)
          // );
          this.showModal('/');
        } else {
          time_min--;
        }
        this.setState(
          time_min < 10 ? { time_min: "0" + time_min } : { time_min }
          );
      }, 60000);
    } else {
      setInterval(sec);
      setInterval(min);
    }
  }

  async componentDidMount() {

    await this.setState({
      modal_text:
      "Welcome to Code Fusion. Please read all rules and conditions properly before starting challenge. On clicking on OK button your challenge's count down starts. Note: If you fails to submit program before time up, your code will be auto submitted and you won't able to re-submit the same challenge again. So be understood with the all rules and conditions. You have been given extra 1 min for understanding of the compiler. Happy Coding. :)"
    });
    if(this.props.match.params.id !=="NA"){
      await this.showModal(true); // For rules acceptance
      // alert("RULES:"+this.state.isRulesAccepted)
    }
   

    let { username, full_name } = await getLoginDetails();
    console.log("username12 :", typeof username);
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
      if (this.props.match.params.id !== "NA") {
        this.setState({ modal_text: "Please Sign In to access this page." });
        this.showModal('/');
        return;
      }
    } else {
      await this.setState({ username, isLoggedIn: true });
    }

    console.log("this.state :", this.state);
    window.scrollTo(0, 0);
    await this.handleLanguageChanged("C");
    if (this.props.match.params.id !== "NA") {
      console.log("this.props.match.params.id :", this.props.match.params.id);
      await this.setState({ program_id: this.props.match.params.id });
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

  handleLanguageChanged(choseLanguage) {
    document.getElementById("output_area").innerHTML = "";
    if (choseLanguage === "C++") {
      choseLanguage = "CPP";
    }
    this.setState({
      program: samplePrograms[choseLanguage],
      language_chosen: choseLanguage
    });
  }

  async handleProgramExecution({ program, inputs, language_chosen }) {
    // console.log("program :", program.trim());
    // console.log("inputs :", inputs.trim().length);
    // console.log("inputs :", language_chosen.trim());

    document.getElementById("output_area").innerHTML = `<div
      id="loaderDisp"
    >
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
        <span style="color:white">Executing...</span>
      </div>
    </div>`;

    await setTimeout(() => {
      console.log("Loading completed");
    }, 3000);

    await axios
      .post("/challenges/compile_program", {
        chosen_language: language_chosen,
        inputs,
        code: program
      })
      .then(async resp => {
        if (resp.data.status === 1) {
          document.getElementById("output_area").innerHTML = "";
          console.log("COMPILED SUCCESSFULLY");
          console.log("resp.data :", resp.data);
          let output = "";
          if (resp.data["stderr"] !== "") {
            output = `<span style="color:orange">${resp.data["stderr"]}</span>`;
          }
          if (resp.data["stdout"] !== "") {
            output = `${resp.data["stdout"]}`;
          }

          document.getElementById("output_area").innerHTML = `<span
          id="output"
          style='color: white; font-weight:"bold"; font-size:18px'
        >${output}</span>`;
        } else {
          this.setState({modal_text:resp.data.message})
          this.showModal()
          // alert(resp.data.message);
        }
      })
      .catch(err => {
        if (err) {
          console.log("ERROR", err);
          this.setState({modal_text:"SOMETHHING WENT WRONG: "+err.message})
          this.showModal()
          // alert("SOMETHHING WENT WRONG");
        }
      });
  }

  handleProgramSubmit() {
    // window.location.reload();
    // alert("Program Submitted Successfully....");
    let query = {
      challenge: {
        program_id: this.state.program_id,
        title: this.state.title,
        code: this.state.program,
        username: this.state.username,
        language_chosen: this.state.language_chosen
      }
    };

    axios
      .post("/challenges/submit", {
        challenge: {
          program_id: this.state.program_id,
          title: this.state.title,
          code: this.state.program,
          username: this.state.username,
          language_chosen: this.state.language_chosen
        }
      })
      .then(resp => {
        if (resp.data.status === 1) {
          alert("CHALLENGE SUBMITTED SUCCESSFULLY");
          // window.location.reload();
          // this.props.history.push("/");
        } else {
          // alert(resp.data.message);
          this.setState({modal_text:resp.data.message})
          this.showModal()
        }
      })
      .catch(err => {
        if (err) {
          console.log("ERROR", err);
          // alert("SOMETHHING WENT WRONG");
          this.setState({modal_text:"SOMETHHING WENT WRONG: "+err.message})
          this.showModal()
        } 
      });

    console.log("query :", query);
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "700px";
    // document.getElementById("main").style.marginLeft = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,1)";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft= "0";
    // document.body.style.backgroundColor = "white";
  }

  // renderLoader() {
  //   return (
  //     <div
  //       id="loaderDiv"
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100%"
  //       }}
  //     >
  //       <div className="spinner">
  //         <div className="bounce1"></div>
  //         <div className="bounce2"></div>
  //         <div className="bounce3"></div>
  //         <span style={{ color: "white" }}>Executing...</span>
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="container-fluid editor">
        <NavBar />
        <Modal
          modalText={this.state.modal_text}
          show={this.state.show}
          handleClose={this.hideModal}
        />
        <br />
        <br />
        <br />
        <div id="mySidenav" className="sidenav">
          <span
            className="closebtn"
            onClick={() => {
              this.closeNav();
            }}
          >
            <b
              style={{
                cursor: "pointer",
                position: "fixed",
                color: "orange"
              }}
            >
              &times;
            </b>
          </span>
          <div className="container">
            <h4 style={{ color: "white" }}>Selected Program</h4>
            <h1 style={{ fontWeight: "bold", color: "white" }}>
              {this.state.title}
            </h1>
            <hr />
            <h2 className="program_statement">Description</h2>
            <ul>
              <li className="program_statement">{this.state.description}</li>
            </ul>
            <hr className="line" />
            <h2 className="program_statement">Input</h2>
            <ul>
              <li className="program_statement">{this.state.input}</li>
            </ul>
            <hr />
            <h2 className="program_statement">Output</h2>
            <ul>
              <li className="program_statement">{this.state.output}</li>
            </ul>
            <hr />
            <h2 className="program_statement">Constraints</h2>
            <ul>
              <li className="program_statement">{this.state.constraints}</li>
            </ul>
            <hr />
            <h2 className="program_statement">Sample Input</h2>
            <ul>
              <li className="program_statement">{this.state.sample_input}</li>
            </ul>
            <hr />
            <h2 className="program_statement">Sample Output</h2>
            <ul>
              <li className="program_statement">{this.state.sample_output}</li>
            </ul>
            <hr />
            {/* <h2 className="program_statement">Private Input</h2>
            <ul>
              <li className="program_statement">{this.state.private_input}</li>
            </ul>
            <hr />
            <h2 className="program_statement">Private Output</h2>
            <ul>
              <li className="program_statement">{this.state.private_output}</li>
            </ul> */}
            <h2 className="program_statement">Time Limit</h2>
            <ul>
              <li className="program_statement">{this.state.time_limit}</li>
            </ul>
          </div>
        </div>
        <span
          style={{ cursor: "pointer", fontSize: "30px" }}
          onClick={() => {
            this.openNav();
          }}
        >
          &#9776;
        </span>
        <div className="container">
          <div className="form-group">
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <label htmlFor="choose_language" className="headerText">
              Choose Language
            </label>
            <label htmlFor="timer" className="headerText">&nbsp;
            {this.props.match.params.id !== "NA" ? (
              <span id="time" style={{color:'red', fontWeight:'bold'}}>
                {" "}
                {this.state.time_hours} : {this.state.time_min} :{" "}
                {this.state.time_sec}{" "}
              </span>
            ) : null}
            </label>
            </div>
            <select
              className="form-control"
              id="languageSelection"
              onChange={event => {
                this.handleLanguageChanged(event.target.value);
              }}
            >
              <option>C</option>
              <option>C++</option>
              <option>Java</option>
              <option>JavaScript</option>
              <option>Python</option>
            </select>
          </div>
          <div>
            <CodeMirror
              value={this.state.program}
              options={{
                mode: "javascript",
                theme: "material",
                lineNumbers: true,
                autoComplete: true
              }}
              onBeforeChange={(editor, data, value) => {
                this.setState({ program: value });
              }}
              onChange={(editor, data, value) => {}}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="inputArea" className="headerText">
              Program Input Area
            </label>
            <textarea
              onChange={event => {
                this.setState({ inputs: event.target.value });
              }}
              value={this.state.inputs}
              placeholder="Every input must be on new line"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
          <div>
            <label htmlFor="inputArea" className="headerText" id="output_div">
              Program Output Area
            </label>
            <div
              className="form-group"
              id="output_area"
              style={{
                height: "200px",
                backgroundColor: "#263238",
                padding: "15px",
                overflow: "auto"
              }}
            ></div>
          </div>

          <br />
          <div className="actionButtonsDiv">
            <button
              type="button"
              className="btn btn-primary btn-lg actionButtons"
              onClick={() => {
                this.handleProgramExecution(this.state);
              }}
            >
              Execute Program
            </button>
            <button
              style={
                !this.state.isLoggedIn ||
                this.props.match.params.id === "NA" ||
                this.state.time_up
                  ? { cursor: "not-allowed" }
                  : { cursor: "pointer" }
              }
              disabled={
                !this.state.isLoggedIn ||
                this.props.match.params.id === "NA" ||
                this.state.time_up
                  ? true
                  : false
              }
              type="button"
              className="btn btn-success btn-lg actionButtons"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Submit Program
            </button>
            {/* <!-- Button trigger modal --> */}

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModalCenter"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      Code Fusion
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Are you sure you want to submit this program ?
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        this.handleProgramSubmit();
                      }}
                      data-dismiss="modal"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Editor;
