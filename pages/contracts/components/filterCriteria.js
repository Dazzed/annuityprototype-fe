import React from "react";

class FilterCriteria extends React.Component {
  render() {
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
            <div className="btn-setting ">
              <button className="btn-color-common">Settings</button>
            </div>
          </div>
        </div>
        <div className="row common-pd">
          <div className="col-lg-6 col-md-4 col-sm-12 col-12">
            <div className="search-box">
              <input type="text" placeholder="Search" />
              <img
                src="/imgs/svg-imgs/search-icon.svg"
                id="icon"
                className="search"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-12 col-12">
            <div className="fliter-issue">
              <button>
                <img
                  src="/imgs/svg-imgs/filter-icon.svg"
                  className="fliter-icon-1"
                  alt="Fliter Icon"
                />
                <span className="filter-component">Present</span>
                Filters
                <img
                  src="/imgs/svg-imgs/fliter-icon-2.svg"
                  alt="Fliter Icon"
                  className="fliter-icon-2"
                />
              </button>
              <button>
                <img src="/imgs/svg-imgs/sort-icon.svg" alt="Sort Icon" />
                Sort by: <span>Issue Date</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FilterCriteria;
