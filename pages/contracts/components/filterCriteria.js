import React from "react";
import $ from "jquery";
import debounce from "lodash/debounce";
import { CONTRACT_COLUMNS } from "../../../config/constants";

class FilterCriteria extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      sort: ["id", "ASC"],
    };

    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handleSorting = this.handleSorting.bind(this);
    this.callApi = this.callApi.bind(this);
  }

  handleSearchQuery(e) {
    e.preventDefault();

    this.setState(
      {
        searchQuery: e.target.value,
      },
      () => this.callApi()
    );
  }

  handleSorting(e) {
    e.preventDefault();

    const sort = this.state.sort;

    if (e.target.name === "sort_column") {
      sort[0] = e.target.value;
    } else if (e.target.name === "sort_direction") {
      sort[1] = e.target.value;
    }

    this.setState(
      {
        sort,
      },
      () => this.callApi()
    );
  }

  callApi = debounce(() => {
    this.props.loadRecords({
      searchQuery: this.state.searchQuery,
      sortBy: JSON.stringify(this.state.sort),
    });
  }, 300);

  componentDidMount() {
    $(".dropdown-menu").click(function (e) {
      e.stopPropagation();
    });
  }

  render() {
    const { searchQuery, sort } = this.state;

    return (
      <>
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-8 col-8">
            <div className="contract-title-name">
              <h2>
                Welcome, <span>Allen</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 co-sm-4 col-4">
            <div className="btn-setting">
              <button className="btn-color-common">
                <img
                  src="/imgs/svgs/carbon_settings.svg"
                  className="setting-icon"
                />
                <span>Settings</span>{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="row common-pd">
          <div className="col-lg-6 col-md-4 col-sm-12 col-12">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={this.handleSearchQuery}
              />
              <img
                src="/imgs/svgs/search-icon.svg"
                id="icon"
                className="search"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-12 col-12">
            <div className="fliter-issue">
              <button>
                <img
                  src="/imgs/svgs/filter-icon.svg"
                  className="fliter-icon-1"
                  alt="Fliter Icon"
                />
                <span className="filter-component">Present</span>
                Filters
                <img
                  src="/imgs/svgs/fliter-icon-2.svg"
                  alt="Fliter Icon"
                  className="fliter-icon-2"
                />
              </button>
              <div className="dropdown d-inline-block">
                <button
                  className=""
                  type="button"
                  id="dropdownMenuButton2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="/imgs/svgs/sort-icon.svg" alt="Sort Icon" />
                  Sort by:{" "}
                  <span>
                    {CONTRACT_COLUMNS.find((e) => e.data === sort[0]).title}
                  </span>
                </button>
                <div
                  className="dropdown-menu custom-sorting"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <select
                    className="form-control"
                    name="sort_column"
                    value={sort[0]}
                    onChange={this.handleSorting}
                  >
                    {CONTRACT_COLUMNS.map((col) => (
                      <option key={col.data} value={col.data}>
                        {col.title}
                      </option>
                    ))}
                  </select>
                  <select
                    className="form-control"
                    name="sort_direction"
                    value={sort[1]}
                    onChange={this.handleSorting}
                  >
                    <option value="ASC">ASC</option>
                    <option value="DESC">DESC</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FilterCriteria;
