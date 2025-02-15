import React from "react";
import Head from "next/head";
import axios from "axios";

import Table from "./components/table";
import SideNav from "../../components/sideNav";
import RightNav from "../../components/rightNav";
import FilterCriteria from "./components/filterCriteria";
import Pagination from "../../components/pagination";
import RightNavContent from "./components/rightNavContent";
import { API_URL } from "../../config/constants";

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
      contracts: [],
      params: {},
      currentPage: 1,
      totalPages: 0,
      totalCount: 0,
      pageSize: 10,
      selectedContractId: null,
      isNavOpen: true,
      rightNavState: 0,
    };

    this.loadRecords = this.loadRecords.bind(this);
    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.expandRightNav = this.expandRightNav.bind(this);
    this.shrinkRightNav = this.shrinkRightNav.bind(this);
    this.selectContract = this.selectContract.bind(this);
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

      const result = await axios.get(`${API_URL}/contracts`, {
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

  selectContract(id) {
    this.setState(
      {
        selectedContractId: id,
      },
      () => this.expandRightNav(true)
    );
  }

  toggleSideNav() {
    this.setState((state) => ({ isNavOpen: !state.isNavOpen }));
  }

  expandRightNav(justOpen = false) {
    if (justOpen) {
      return this.setState({
        rightNavState: 1,
      });
    }

    this.setState((state) => ({
      rightNavState:
        state.rightNavState < 2 ? state.rightNavState + 1 : state.rightNavState,
    }));
  }

  shrinkRightNav() {
    this.setState((state) => ({
      rightNavState: state.rightNavState > 0 ? state.rightNavState - 1 : 0,
    }));
  }

  render() {
    const {
      contracts,
      currentPage,
      totalPages,
      totalCount,
      pageSize,
      isNavOpen,
      rightNavState,
      selectedContractId,
    } = this.state;

    const range = getPageRange({
      currentPage,
      pageSize,
      totalCount,
    });

    return (
      <div
        className={`container-fluid h-100 ${
          isNavOpen ? "table-padding-sideNavLeft" : "pl-3"
        } ${rightNavState !== 0 ? "table-container-rightNav" : ""} `}
      >
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <div className="row h-100">
          <SideNav isNavOpen={isNavOpen} toggleSideNav={this.toggleSideNav} />
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <FilterCriteria loadRecords={this.loadRecords} />
            <div className="row common-pd">
              <div className="col-md-12">
                <div className="row">
                  <Table
                    contracts={contracts}
                    selectedContractId={selectedContractId}
                    selectContract={this.selectContract}
                  />
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
          <RightNav
            expandable={true}
            navState={rightNavState}
            expandNav={this.expandRightNav}
            shrinkNav={this.shrinkRightNav}
          >
            <RightNavContent
              contract={contracts.find((e) => e.id === selectedContractId)}
              loadRecords={this.loadRecords}
            />
          </RightNav>
        </div>
      </div>
    );
  }
}

export default ContractsPage;
