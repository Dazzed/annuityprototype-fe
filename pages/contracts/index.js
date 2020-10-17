import React from "react";
import Head from "next/head";
import axios from "axios";

import Table from "./components/table";
import SideNav from "../../components/sideNav";
import RightSideNav from "../../components/RightSideNav";
import FilterCriteria from "./components/filterCriteria";
import Pagination from "./components/pagination";

const getPageRange = ({ currentPage, pageSize, totalCount }) => {
  if (totalCount === 0) return "None";

  const startRecord = currentPage === 1 ? 1 : (currentPage - 1) * pageSize;
  const endRecord =
    startRecord + pageSize <= totalCount ? startRecord + pageSize : totalCount;

  return currentPage === 1
    ? `1-${pageSize} of ${totalCount}`
    : `${startRecord}-${endRecord} of ${totalCount}`;
};

class ContractsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: true,
      contracts: [],
      params: {},
      currentPage: 1,
      totalPages: 0,
      totalCount: 0,
      pageSize: 10,
    };

    this.loadRecords = this.loadRecords.bind(this);
    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.toggleRightSideNav = this.toggleRightSideNav.bind(this);
  }

  componentDidMount() {
    this.loadRecords();
  }

  async loadRecords(params) {
    try {
      const queryParams = {
        ...this.state.params,
        ...params,
        pageSize: this.state.pageSize,
      };

      const result = await axios.get(`http://localhost:3000/contracts`, {
        params: queryParams,
      });

      this.setState({
        contracts: result.data.rows,
        currentPage: parseInt(result.data.currentPage),
        totalPages: parseInt(result.data.totalPages),
        totalCount: parseInt(result.data.totalCount),
        pageSize: parseInt(result.data.pageSize),
        params: queryParams,
      });
    } catch (error) {
      console.error(error);
    }
  }

  toggleSideNav() {
    this.setState((state) => ({ isNavOpen: !state.isNavOpen }));
  }
  toggleRightSideNav() {
    this.setState((state) => ({ isNavOpen: !state.isNavOpen }));
  }

  render() {
    const {
      contracts,
      currentPage,
      totalPages,
      totalCount,
      pageSize,
      isNavOpen,
    } = this.state;

    const range = getPageRange({
      currentPage,
      pageSize,
      totalCount,
    });

    return (
      <div className="container-fluid h-100">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <div className="row h-100">
          <SideNav isNavOpen={isNavOpen} toggleSideNav={this.toggleSideNav} />
          <RightSideNav isNavOpen={isNavOpen} toggleRightSideNav={this.toggleRightSideNav} />
          <div
            className={`col-lg-${
              isNavOpen ? "9" : "12"
            } col-md-12 col-sm-12 col-12 `}
          >
            <FilterCriteria loadRecords={this.loadRecords} />
            <div className="row common-pd">
              <div className="col-md-12">
                <div className="row">
                  <Table contracts={contracts} />
                </div>
                <div className="row mb-5 mb-lg-2">
                  <div className="col-lg-12 text-right">
                    <Pagination
                      totalPages={totalPages}
                      currentPage={currentPage}
                      loadRecords={this.loadRecords}
                    />
                    <span className="range-section">{range}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <button className="position-absolute" style={{ left: '5px'}}>SlideOpen</button> */}
        </div>
      </div>
    );
  }
}

export default ContractsPage;
