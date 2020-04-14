import React from "react";
class PaginationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total_pages: 0,
      current_page: 1,
      total_records: 1,
      per_page: 0,
      isPageLoaded: false,
      temp_array: []
    };
  }
  async componentDidMount() {
    let total_records = Number(this.props.total_records);
    let per_page = Number(this.props.per_page);
    let total_pages = Math.ceil(total_records / per_page);
    // console.log("total_records :", total_records);
    // console.log("per_page :", per_page);

    await this.setState({ total_records, per_page, total_pages });
    for (let i = 0; i < this.state.total_pages; i++) {
      this.state.temp_array.push(i + 1);
    }
    await this.setState({ isPageLoaded: true });
  }

  async handlePaginationBtn(btn, direct_jump_page_no) {
    if (btn === "next") {
      await this.setState({ current_page: this.state.current_page + 1 });
    } else if (btn === "prev") {
      await this.setState({ current_page: this.state.current_page - 1 });
    } else if (btn === "direct_jump") {
      await this.setState({ current_page: direct_jump_page_no });
    }
    await this.renderPaginationBar();
    await this.props.handlePaginationBtn(this.state.current_page);
  }

  renderPaginationBar() {
    return this.state.temp_array.map(i => {
      return (
        <li
          key={i}
          className={
            i === this.state.current_page ? "page-item active" : "page-item"
          }
        >
          <span
            onClick={this.handlePaginationBtn.bind(this, "direct_jump", i)}
            className="page-link"
          >
            {i}
          </span>
        </li>
      );
    });
  }

  render() {
    return (
      <nav className="ml-4">
        <ul className="pagination">
          <li
            className={
              this.state.current_page === 1 ? "page-item disabled" : "page-item"
            }
          >
            <span
              onClick={this.handlePaginationBtn.bind(this, "prev")}
              className="page-link"
            >
              Previous
            </span>
          </li>
          {this.state.isPageLoaded ? this.renderPaginationBar() : null}
          <li
            className={
              this.state.current_page === this.state.total_pages
                ? "page-item disabled"
                : "page-item"
            }
          >
            <span
              className="page-link"
              onClick={this.handlePaginationBtn.bind(this, "next")}
            >
              Next
            </span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default PaginationBar;
