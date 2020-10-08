import React, { Component } from "react";

class Pagination extends Component {
  handleMoveLeft = (e) => {
    e.preventDefault();

    if (this.props.currentPage < 1) return;

    this.props.loadRecords({
      page: this.props.currentPage - 1,
    });
  };

  handleMoveRight = (e) => {
    e.preventDefault();

    if (this.props.currentPage >= this.props.totalPages) return;

    this.props.loadRecords({
      page: this.props.currentPage + 1,
    });
  };

  render() {
    return (
      <nav aria-label="pagination">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href="#0"
              aria-label="Previous"
              onClick={this.handleMoveLeft}
            >
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="#0"
              aria-label="Next"
              onClick={this.handleMoveRight}
            >
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
