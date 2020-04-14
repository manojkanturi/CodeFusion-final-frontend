import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import axios from "../api";
import Modal from "./Modal";
// import PaginationBar from "./PaginationBar";
import { getChallengesData } from "../helpers/GetChallenges";
import { getLoginDetails } from "../helpers/Store";

class ViewResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [],
      searchText: "",
      isAdmin: false,
      username: "",
      show: false,
      modal_text: "",
      isLoggedIn: false,
      total_records: 0,
      per_page: 3,
      isDataFetched: false
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
    this.props.history.push("/");
  };

  handlePaginationBtn = async page_number => {
    console.log("page_number :", page_number);
    this.apiCall(page_number);
  };

  async componentDidMount() {
    let { username, full_name, isAdmin } = await getLoginDetails();
    console.log("isAdmin :", isAdmin);
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
      return;
    } else {
      this.setState({ challenges: [] });
      await this.apiCall(1); // default page number === 1
    }
  }

  async apiCall(page_number) {
    await axios
      .post("/challenges/get_submitted_challenges", {
        page_number: page_number,
        per_page: this.state.per_page
      })
      .then(async res => {
        console.log("res.data :", res.data);
        let data = await getChallengesData(res.data.result);
        await this.setState({
          challenges: data,
          total_records: Number(res.data.total_records),
          per_page: this.state.per_page,
          isDataFetched: true
        });
      })
      .catch(async function(error) {
        console.log(error);
        await this.setState({
          modal_text: `SOMETHING WENT WRONG: ${error.message} `
        });
        await this.showModal();
      });
  }

  returnSearchTerm(index, { program_id, title, createdAt, no_of_submissions }) {
    console.log("program_id :", program_id);
    return (
      <tr key={program_id}>
        <td>{index + 1}</td>
        <td> {title}</td>
        <td> {new Date(createdAt).toLocaleDateString()}</td>
        <td> {no_of_submissions}</td>
        <td>
          <Link to={`/rankings/${program_id}`} className="btn btn-secondary">
            <i className="fas fa-angle-double-right" /> View Result
          </Link>
        </td>
      </tr>
    );
  }

  renderChallenge(searchText = this.state.searchText) {
    if (searchText && searchText !== "") {
      return this.state.challenges.map((challenge, i) => {
        return challenge.title.toLowerCase().indexOf(searchText.toLowerCase()) >
          -1
          ? this.returnSearchTerm(i, challenge)
          : null;
      });
    } else {
      return this.state.challenges.map((challenge, i) => {
        return this.returnSearchTerm(i, challenge);
      });
    }
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
        <div>
          {/* HEADER */}
          <header id="main-header" className="py-2 bg-primary text-white">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1>
                    <i className="fas fa-desktop" /> Result
                  </h1>
                </div>
              </div>
            </div>
          </header>
          {/* SEARCH */}
          <section id="search" className="py-4 mb-4 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search result of challenge..."
                      onChange={event => {
                        this.setState({ searchText: event.target.value });
                      }}
                      value={this.state.searchText}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          this.renderChallenge(this.state.searchText);
                        }}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* POSTS */}
          <section id="posts">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-header">
                      <h4>Results </h4>
                    </div>
                    <table className="table table-striped">
                      <thead className="thead-dark">
                        <tr>
                          <th>#</th>
                          <th>Challenges</th>
                          <th>Date</th>
                          <th>Submissions</th>
                          <th>View Result</th>
                        </tr>
                      </thead>
                      <tbody>{this.renderChallenge()}</tbody>
                    </table>
                    {/* {this.state.isDataFetched ? (
                      <PaginationBar
                        total_records={this.state.total_records}
                        per_page={this.state.per_page}
                        handlePaginationBtn={this.handlePaginationBtn}
                      />
                    ) : null} */}
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
export default ViewResult;
