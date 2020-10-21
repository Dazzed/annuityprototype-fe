import React from "react";
import Head from "next/head";
import axios from "axios";
import SideNav from "../../components/sideNav";
import FilterCriteria from "../contracts/components/filterCriteria";
import RightNav from "../../components/rightNav";
import RightNavContent from "./components/rightNavContent";

class Clients extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: true,
      rightNavState: 0,
    };

    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.expandRightNav = this.expandRightNav.bind(this);
    this.shrinkRightNav = this.shrinkRightNav.bind(this);
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
    const { isNavOpen, rightNavState } = this.state;

    return (
      <div
        className={`container-fluid h-100 ${isNavOpen ? "table-padding-sideNavLeft" : "pl-3"
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
              <div className="col-lg-12">
                <div className="grid-section">
                  <img src="/imgs/column-icon.png" alt="Column Icon" />
                  <img src="/imgs/list-icon.png" alt="List Icon" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <ul
                  className="nav nav-pills nav-custom-pills nav-pills-support mb-3 pl-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link-custom active"
                      id="pills-clients-tab"
                      data-toggle="pill"
                      href="#pills-clients"
                      role="tab"
                      aria-controls="pills-clients"
                      aria-selected="true"
                    >
                      Clients
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link-custom"
                      id="pills-groups-tab"
                      data-toggle="pill"
                      href="#pills-groups"
                      role="tab"
                      aria-controls="pills-groups"
                      aria-selected="false"
                    >
                      Groups
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link-custom"
                      id="pills-help-cllent-tab"
                      data-toggle="pill"
                      href="#pills-help-cllent"
                      role="tab"
                      aria-controls="pills-help-cllent"
                      aria-selected="false"
                    >
                      Help
                    </a>
                  </li>
                </ul>
                <div
                  className="tab-content tab-custom-supportsection"
                  id="pills-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="pills-clients"
                    role="tabpanel"
                    aria-labelledby="pills-clients-tab"
                  >
                    <div className="row">
                      <div className={` ${rightNavState !== 0 ? "col-lg-6 col-md-6 col-sm-6 col-12" : "col-lg-4 col-md-4 col-sm-6 col-12"} `}
                        onClick={() => this.expandRightNav()}
                      >
                        <div className="clients-column-section">
                          <div className="clients-img-section">
                            <img
                              src="/imgs/profile-pic.png"
                              alt="Column Icon"
                            />
                            <h4>Jane Doe</h4>
                            <h6>$1,345,889</h6>
                          </div>
                          <div className="row">
                            <div className="client-value-section">
                              <div className="client-contract-section">
                                <p>Contracts</p>
                                <h5>3</h5>
                              </div>
                              <div className="client-contract-section">
                                <p>Age</p>
                                <h5>81</h5>
                              </div>
                              <div className="client-contract-section">
                                <p>Beneficiaries</p>
                                <h5>2</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={` ${rightNavState !== 0 ? "col-lg-6 col-md-6 col-sm-6 col-12" : "col-lg-4 col-md-4 col-sm-6 col-12"} `}
                        onClick={() => this.expandRightNav()}
                      >
                        <div className="clients-column-section">
                          <div className="clients-img-section">
                            <img
                              src="/imgs/profile-pic.png"
                              alt="Column Icon"
                            />
                            <h4>Jane Doe</h4>
                            <h6>$1,345,889</h6>
                          </div>
                          <div className="row">
                            <div className="client-value-section">
                              <div className="client-contract-section">
                                <p>Contracts</p>
                                <h5>3</h5>
                              </div>
                              <div className="client-contract-section">
                                <p>Age</p>
                                <h5>81</h5>
                              </div>
                              <div className="client-contract-section">
                                <p>Beneficiaries</p>
                                <h5>2</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={` ${rightNavState !== 0 ? "col-lg-6 col-md-6 col-sm-6 col-12" : "col-lg-4 col-md-4 col-sm-6 col-12"} `}
                        onClick={() => this.expandRightNav()}
                      >
                        <div className="clients-column-section">
                          <div className="clients-img-section">
                            <img
                              src="/imgs/profile-pic.png"
                              alt="Column Icon"
                            />
                            <h4>Jane Doe</h4>
                            <h6>$1,345,889</h6>
                          </div>
                          <div className="row">
                            <div className="client-value-section">
                              <div className="client-contract-section">
                                <p>Contracts</p>
                                <h5>3</h5>
                              </div>
                              <div className="client-contract-section">
                                <p>Age</p>
                                <h5>81</h5>
                              </div>
                              <div className="client-contract-section">
                                <p>Beneficiaries</p>
                                <h5>2</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={` ${rightNavState !== 0 ? "col-lg-6 col-md-6 col-sm-6 col-12" : "col-lg-4 col-md-4 col-sm-6 col-12"} `}
                        onClick={() => this.expandRightNav()}
                      >
                        <div className="clients-column-section">
                          <div className="clients-img-section">
                            <img
                              src="/imgs/profile-pic.png"
                              alt="Column Icon"
                            />
                            <h4>Jane Doe</h4>
                            <h6>$1,345,889</h6>
                          </div>
                          <div className="row">
                            <div className="client-value-section">
                              <div className="client-contract-section">
                                <p>Contracts</p>
                                <h5>3</h5>
                              </div>
                              <div className="client-contract-section">
                                <p>Age</p>
                                <h5>81</h5>
                              </div>
                              <div className="client-contract-section">
                                <p>Beneficiaries</p>
                                <h5>2</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={` ${rightNavState !== 0 ? "col-lg-6 col-md-6 col-sm-6 col-12" : "col-lg-4 col-md-4 col-sm-6 col-12"} `}
                        onClick={() => this.expandRightNav()}
                      >
                        <div className="clients-column-section">
                          <div className="clients-img-section">
                            <img
                              src="/imgs/profile-pic.png"
                              alt="Column Icon"
                            />
                            <h4>Jane Doe</h4>
                            <h6>$1,345,889</h6>
                          </div>
                          <div className="row">
                            <div className="client-value-section">
                              <div className="client-contract-section">
                                <p>Contracts</p>
                                <h5>3</h5>
                              </div>
                              <div className="client-contract-section">
                                <p>Age</p>
                                <h5>81</h5>
                              </div>
                              <div className="client-contract-section">
                                <p>Beneficiaries</p>
                                <h5>2</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade column-width-pills col-width-suportsection"
                    id="pills-groups"
                    role="tabpanel"
                    aria-labelledby="pills-groups-tab"
                  ></div>
                  <div
                    className="tab-pane fade column-width-pills col-width-suportsection"
                    id="pills-help-cllent"
                    role="tabpanel"
                    aria-labelledby="pills-help-cllent-tab"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <RightNav
            navState={rightNavState}
            expandable={false}
            expandNav={this.expandRightNav}
            shrinkNav={this.shrinkRightNav}
          >
            <RightNavContent />
          </RightNav>
        </div>
      </div>
    );
  }
}

export default Clients;
