import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { isMobile } from "react-device-detect";

import TableDesktop from "./components/desktop/table";
import TableMobile from "./components/mobile/table";
import SideNav from "./components/sideNav";
import FilterCriteria from "./components/filterCriteria";

class ContractsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contracts: [],
    };
  }

  componentDidMount() {
    this.loadRecords();
  }

  async loadRecords(params) {
    try {
      const result = await axios.get(`http://localhost:3000/contracts`, {
        params,
      });
      this.setState({
        contracts: result.data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { contracts } = this.state;

    // Mobile view
    return (
      <div className="container-fluid h-100 pl-3 pl-lg-0">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <div className="row h-100">
          <div className="col-lg-2 col-md-12 pr-0 order-second">
            <SideNav />
          </div>
          <div className="col-lg-10 col-md-12 col-sm-12 col-12 common-mr-pd">
            <FilterCriteria />
            <div className="row common-pd">
              <div className="col-md-12">
                {isMobile ? (
                  <TableMobile contracts={contracts} />
                ) : (
                  <TableDesktop contracts={contracts} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContractsPage;
