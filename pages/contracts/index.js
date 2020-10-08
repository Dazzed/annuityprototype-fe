import React from "react";
import Head from "next/head";
import axios from "axios";

import Table from "./components/table";
import SideNav from "./components/sideNav";
import FilterCriteria from "./components/filterCriteria";
import Pagination from "./components/pagination";

const getPageRange = ({ currentPage, pageSize, totalCount }) => {
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
      currentPage: 1,
      totalPages: 0,
      totalCount: 0,
      pageSize: 10,
    };

    this.loadRecords = this.loadRecords.bind(this);
  }

  componentDidMount() {
    this.loadRecords();
  }

  async loadRecords(params) {
    try {
      const result = await axios.get(`http://localhost:3000/contracts`, {
        params: {
          ...params,
          pageSize: this.state.pageSize,
        },
      });

      this.setState({
        contracts: result.data.rows,
        currentPage: parseInt(result.data.currentPage),
        totalPages: parseInt(result.data.totalPages),
        totalCount: parseInt(result.data.totalCount),
        pageSize: parseInt(result.data.pageSize),
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const {
      contracts,
      currentPage,
      totalPages,
      totalCount,
      pageSize,
    } = this.state;
    const range = getPageRange({
      currentPage,
      pageSize,
      totalCount,
    });

    return (
      <div className="container-fluid h-100 px-3 pl-lg-0 pr-lg-3">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <div className="row h-100">
          <div className="col-lg-2 col-md-12 px-0 pr-lg-0 pl-lg-3 order-second bg-default">
            <SideNav />
          </div>
          <div className="col-lg-10 col-md-12 col-sm-12 col-12 common-mr-pd">
            <FilterCriteria />
            <div className="row common-pd">
              <div className="col-md-12">
                <Table contracts={contracts} />
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
        </div>
      </div>
    );
  }
}

export default ContractsPage;
