import React from "react";
import $ from "jquery";
import debounce from "lodash/debounce";

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
    const { searchQuery } = this.state;

    return (
      <div className="row common-pd pt-lg-3">
        <div className="col-lg-12 col-md-4 col-sm-12 col-12">
          <div className="search-box support-searchbox d-inline-block">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={this.handleSearchQuery}
            />
            <img
              src="/imgs/svgs/support-searchicon.svg"
              id="icon"
              className="search searchicon-support"
            />
          </div>
          <div className="fliter-issue">
            <button className="newdesignfilter-btn">Filter</button>
            <button className="newdesignfilter-btn">Saved Filter</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterCriteria;
