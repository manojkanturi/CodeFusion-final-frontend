import React from "react";
import NavBar from "./NavBar";
import axios from "../api";
import Modal from "./Modal";
import { getLoginDetails } from "../helpers/Store";

class Rankings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      show: false,
      modal_text: "",
      isLoggedIn: false,
      searchText: ""
    };
  }

  async componentDidMount() {
    let { username, full_name } = await getLoginDetails();
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
      this.setState({
        isLoggedIn: true,
        modal_text: "Please Wait While the Results are Loaded."
      });
      await this.showModal();
    }

    console.log("this.props :", this.props);

    await axios
      .post("/results/get_result", {
        program_id: this.props.match.params.id
      })
      .then(async res => {
        console.log(res.data);
        if (res.data.status === 1 && res.data.result.length > 0) {
          await this.setState({
            results: res.data.result
          });
          await this.hideModal();
          console.log("this.state :", this.state);
        } else if (res.data.status === 0) {
          this.setState({
            modal_text:
              "Results are not generated yet. Please wait for some time.",
            isLoggedIn: false
          });
          this.showModal();
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
        // this.hideModal();
      });
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  renderResults(searchText = this.state.searchText) {
    // if (searchText && searchText !== "") {
    //   return this.state.results.map((winnerProfile, i) => {
    //     return winnerProfile.username
    //       .toLowerCase()
    //       .indexOf(searchText.toLowerCase()) > -1
    //       ? this.returnSearchTerm(i, winnerProfile)
    //       : null;
    //   });
    // } else {
    return this.state.results.map((winnerProfile, i) => {
      return this.returnSearchTerm(i, winnerProfile);
    });
    // }
  }

  returnTrophies(rank) {
    let trophies = null;
    switch (rank) {
      case 1:
        trophies = (
          <td style={{ color: "red" }}>
            <span style={{ fontSize: "20px" }} className="badge badge-primary">
              PRO
            </span>
          </td>
        );
        break;
      case 2:
        trophies = (
          <td style={{ color: "goldenrod" }}>
            <i className="fas fa-trophy " />
            <i className="fas fa-trophy " />
            <i className="fas fa-trophy " />
          </td>
        );
        break;
      case 3:
        trophies = (
          <td style={{ color: "goldenrod" }}>
            <i className="fas fa-trophy " />
            <i className="fas fa-trophy " />
          </td>
        );
        break;
      case 4:
        trophies = (
          <td style={{ color: "goldenrod" }}>
            <i className="fas fa-trophy " />
          </td>
        );
        break;
      case 5:
        trophies = (
          <td style={{ color: "silver" }}>
            <i className="fas fa-trophy " />
            <i className="fas fa-trophy " />
            <i className="fas fa-trophy " />
          </td>
        );
        break;
      case 6:
        trophies = (
          <td style={{ color: "silver" }}>
            <i className="fas fa-trophy " />
            <i className="fas fa-trophy " />
          </td>
        );
        break;
      case 7:
        trophies = (
          <td style={{ color: "silver" }}>
            <i className="fas fa-trophy " />
          </td>
        );
        break;
      case 8:
        trophies = (
          <td style={{ color: "brown" }}>
            <i className="fas fa-trophy " />
            <i className="fas fa-trophy " />
            <i className="fas fa-trophy " />
          </td>
        );
        break;
      case 9:
        trophies = (
          <td style={{ color: "brown" }}>
            <i className="fas fa-trophy " />
            <i className="fas fa-trophy " />
          </td>
        );
        break;
      case 10:
        trophies = (
          <td style={{ color: "brown" }}>
            <i className="fas fa-trophy " />
          </td>
        );
        break;
    }
    return trophies;
  }

  returnSearchTerm(index, { username, executionTime }) {
    return (
      <tr key={index || username}>
        <td>{index + 1}</td>
        <td>
          <b> {username}</b>
        </td>
        <td>{Number(executionTime) / 1000000} sec</td>
        {/* <td style={{ color: "goldenrod" }}>
          <i className="fas fa-trophy " />
          <i className="fas fa-trophy " />
          <i className="fas fa-trophy " />
        </td> */}
        {this.returnTrophies(index + 1)}
      </tr>
    );
  }

  render() {
    return (
      <div className="App">
        <div>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
            integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
            crossOrigin="anonymous"
          />
          <title>Ranking</title>
          <NavBar />
          <Modal
            modalText={this.state.modal_text}
            show={this.state.show}
            handleClose={this.hideModal}
          />
          <br /> <br /> <br />
          {/* HEADER */}
          <header id="main-header" className="py-2 bg-info text-white">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1>
                    <i className="fas fa-trophy" /> Ranking
                  </h1>
                </div>
              </div>
            </div>
          </header>
          <br />
          <br />
          <br />
          {/* SEARCH */}
          {/* <section id="search" className="py-4 mb-4 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto">
                  <div className="input-group">
                    <input
                      onChange={event => {
                        this.setState({ searchText: event.target.value });
                      }}
                      value={this.state.searchText}
                      type="text"
                      className="form-control"
                      placeholder="Search Username..."
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-info"
                        onClick={() => {
                          this.renderResults(this.state.searchText);
                        }}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* USERS */}
          <section id="users">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-header">
                      <h4>Result Ranking-wise</h4>
                    </div>
                    <table className="table table-striped">
                      <thead className="thead-dark">
                        <tr>
                          <th>Rank</th>
                          <th>Username</th>
                          <th>Time Taken</th>
                          <th>Medal</th>
                        </tr>
                      </thead>
                      <tbody>{this.renderResults()}</tbody>
                      {/* <tbody>
                        <tr>
                          <td>1</td>
                          <td>Hitesh Doe</td>
                          <td>4:30</td>
                          <td style={{ color: "goldenrod" }}>
                            <i className="fas fa-trophy " />
                            <i className="fas fa-trophy " />
                            <i className="fas fa-trophy " />
                          </td>
                        </tr>
                      </tbody> */}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Rankings;
