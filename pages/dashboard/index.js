import React from "react";
import Head from "next/head";
import axios from "axios";
import SideNav from "../../components/sideNav";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: true,
    };

    this.toggleSideNav = this.toggleSideNav.bind(this);
  }

  componentDidMount() {
    this.loadRecords();
  }

  async loadRecords() {
    try {
      const result = await axios.get(`http://localhost:3000/notifications`, {});

      this.setState({
        notifications: result.data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  toggleSideNav() {
    this.setState((state) => ({ isNavOpen: !state.isNavOpen }));
  }

  render() {
    const { isNavOpen } = this.state;

    return (
      <div
        className={`container-fluid h-100 ${
          isNavOpen ? "table-padding-sideNavLeft" : "pl-3"
        }`}
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
            <div className="row common-pd">
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="contract-title-name">
                  <h2>
                    Welcome, <span>Allen</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 co-12">
                <div className="customized-section">
                  <button>Customize</button>
                </div>
              </div>
              {/* left side column */}
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="row  mt-5">
                  <div className="col-lg-12">
                    <div className="card-header-section">
                      <div className="card-header-title">
                        <h5>Card Header</h5>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="card-header-value">
                            <h3>$23,000,000</h3>
                            <p>Total Contract Value</p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card-header-value">
                            <h3>$55,000</h3>
                            <p>Withdrawals in the last 7 days</p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card-header-value">
                            <h3>234</h3>
                            <p>Total Contracts</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Notification section */}
                  <div className="col-lg-12 mt-5">
                    <div className="recent-notification-section">
                      <div className="row mb-3">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                          <div className="recent-notification-title">
                            <h3>Recent Notifications</h3>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="view-btnsection">
                            <button>View All</button>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-lg-9 col-md-9 col-sm-7 col-12 align-self-center">
                          <div className="date-section">
                            {/* <h6>
                              {format(
                                new Date(notification.timestamp),
                                "MMMM d h:mm a"
                              )}
                            </h6> */}
                            <h6>October 12 12:55pm</h6>
                          </div>
                          <div className="msg-contentsection">
                            {/* <p>{notification.message}</p> */}
                            <p>
                              <b>John</b> Doe initiatied a withdrawal for $1,500
                              from contract <b>XX123456789</b> via form
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-5 col-12 align-self-center">
                          <div className="seemore-section text-center">
                            <h6>
                              See More{" "}
                              <img
                                src="/imgs/svgs/rightarrow-icon.svg"
                                alt="Rightarrow Icon "
                              />{" "}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-lg-9 col-md-9 col-sm-7 col-12 align-self-center">
                          <div className="date-section">
                            {/* <h6>
                              {format(
                                new Date(notification.timestamp),
                                "MMMM d h:mm a"
                              )}
                            </h6> */}
                            <h6>October 12 12:55pm</h6>
                          </div>
                          <div className="msg-contentsection">
                            {/* <p>{notification.message}</p> */}
                            <p>
                              <b>John</b> Doe initiatied a withdrawal for $1,500
                              from contract <b>XX123456789</b> via form
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-5 col-12 align-self-center">
                          <div className="seemore-section text-center">
                            <h6>
                              See More{" "}
                              <img
                                src="/imgs/svgs/rightarrow-icon.svg"
                                alt="Rightarrow Icon "
                              />{" "}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-lg-9 col-md-9 col-sm-7 col-12 align-self-center">
                          <div className="date-section">
                            {/* <h6>
                              {format(
                                new Date(notification.timestamp),
                                "MMMM d h:mm a"
                              )}
                            </h6> */}
                            <h6>October 12 12:55pm</h6>
                          </div>
                          <div className="msg-contentsection">
                            {/* <p>{notification.message}</p> */}
                            <p>
                              <b>John</b> Doe initiatied a withdrawal for $1,500
                              from contract <b>XX123456789</b> via form
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-5 col-12 align-self-center">
                          <div className="seemore-section text-center">
                            <h6>
                              See More{" "}
                              <img
                                src="/imgs/svgs/rightarrow-icon.svg"
                                alt="Rightarrow Icon "
                              />{" "}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Calendar section */}
                  <div className="col-lg-12 mt-5">
                    <div className="calendar-dashboard-section">
                      <div className="row mb-3">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="card-header-title">
                            <h5>Calendar</h5>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="month-secion">
                            <a href="#">Month</a>
                            <a href="#" className="active-section">
                              Week
                            </a>
                            <a href="#">Day</a>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-lg-6 col-md-12 br-rigth">
                          <div className="date-value">
                            <h4>15</h4>
                            <p>Monday</p>
                          </div>
                          <div className="meeting-section">
                            <div className="bg-radius">
                              <div className="round-clour orange-color"></div>
                            </div>
                            <div className="time-section">8am</div>
                            <div className="conten-section">
                              Meeting with Brad Davidson
                            </div>
                          </div>
                          <div className="meeting-section">
                            <div className="bg-radius">
                              <div className="round-clour blue-color"></div>
                            </div>
                            <div className="time-section">8am</div>
                            <div className="conten-section">
                              Meeting with Patricia Williams
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="date-value">
                            <h4>16</h4>
                            <p>Tuesday</p>
                          </div>
                          <div className="meeting-section">
                            <div className="bg-radius">
                              <div className="round-clour green-color"></div>
                            </div>
                            <div className="time-section">10am</div>
                            <div className="conten-section">
                              Meeting with office team
                            </div>
                          </div>
                          <div className="meeting-section">
                            <div className="bg-radius">
                              <div className="round-clour blue-color"></div>
                            </div>
                            <div className="time-section">4pm</div>
                            <div className="conten-section">
                              Meeting with Patricia Williams
                            </div>
                          </div>
                          <div className="rightarrow">
                            <img src="/imgs/svgs/rightarrow-large.svg" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="seemoresection-dashboard calendar-section-seemore">
                            <h6>
                              See More{" "}
                              <img
                                src="/imgs/svgs/rightarrow-blue.svg"
                                alt="Rightarrow Icon "
                              />{" "}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Progress section */}
                  <div className="col-lg-12 mt-5">
                    <div className="progress-dashboard-section">
                      <div className="row mb-3">
                        <div className="col-lg-12 col-md-12">
                          <div className="card-header-title">
                            <h5>In Progress</h5>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-lg-6 co-md-12 col-sm-12 col-12">
                          <div className="progress-detail">
                            <h4>Form XXX for Cathrine Williams</h4>
                            <p>12/1/2020</p>
                          </div>
                        </div>
                        <div className="col-lg-6 co-md-12 col-sm-12 col-12">
                          <div className="progress-process position-relative">
                            <h6>PL Processing</h6>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "70%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div className="progress-value">
                              <span>70%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-lg-6 co-md-12 col-sm-12 col-12">
                          <div className="progress-detail">
                            <h4>Transfer $1,500 for XX12345678</h4>
                            <p>11/14/2020</p>
                          </div>
                        </div>
                        <div className="col-lg-6 co-md-12 col-sm-12 col-12">
                          <div className="progress-process position-relative">
                            <h6>Submitted</h6>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "30%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div className="progress-value">
                              <span>30%</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="seemoresection-dashboard calendar-section-seemore">
                            <h6>
                              See More{" "}
                              <img
                                src="/imgs/svgs/rightarrow-blue.svg"
                                alt="Rightarrow Icon "
                              />{" "}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right side column */}
              <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-5">
                {/* Anniversaries Column */}
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="anniversary-section-dashboard">
                      <h3>Anniversaries</h3>
                      <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                          <div className="anniversary-section-value">
                            <h3>Jane Doe</h3>
                            <p>VA123456789</p>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                          <div className="date-section">
                            <h5>Tomorrow</h5>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                          <div className="anniversary-section-value">
                            <h3>Frank Jones</h3>
                            <p>VA123456789</p>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                          <div className="date-section">
                            <h5>11/1/2020</h5>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                          <div className="anniversary-section-value">
                            <h3>Cynthia Lee</h3>
                            <p>VA123456789</p>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                          <div className="date-section">
                            <h5>11/1/2020</h5>
                          </div>
                        </div>
                      </div>
                      <div className="seemoresection-dashboard">
                        <h6>
                          See More{" "}
                          <img
                            src="/imgs/svgs/rightarrow-blue.svg"
                            alt="Rightarrow Icon "
                          />{" "}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Task */}
                <div className="row mt-5">
                  <div className="col-lg-12">
                    <div className="task-section">
                      <div className="card-header-title">
                        <h5>Tasks</h5>
                      </div>
                      <div className="assign-section">
                        <h4>
                          Funds Transfer <b>XX123456789</b>
                        </h4>
                        <p>Assigned to Lilly</p>
                        <img
                          src="/imgs/svgs/rightarrow-blue.svg"
                          alt="Rightarrow Icon "
                          className="rightarrow-task"
                        />
                      </div>
                      <div className="assign-section">
                        <h4>
                          Funds Transfer <b>XX123456789</b>
                        </h4>
                        <p>Assigned to Lilly</p>
                        <img
                          src="/imgs/svgs/rightarrow-blue.svg"
                          alt="Rightarrow Icon "
                          className="rightarrow-task"
                        />
                      </div>
                      <div className="assign-section">
                        <h4>
                          Funds Transfer <b>XX123456789</b>
                        </h4>
                        <p>Assigned to Lilly</p>
                        <img
                          src="/imgs/svgs/rightarrow-blue.svg"
                          alt="Rightarrow Icon "
                          className="rightarrow-task"
                        />
                      </div>
                      <div className="seemoresection-dashboard">
                        <h6>
                          See More{" "}
                          <img
                            src="/imgs/svgs/rightarrow-blue.svg"
                            alt="Rightarrow Icon "
                          />{" "}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Chat support section */}
                <div className="row mt-5">
                  <div className="col-lg-12">
                    <div className="chat-dashboard-section">
                      <img src="/imgs/svgs/chat-icon.svg" />
                      <h5>Chat with Support</h5>
                      <p>
                        Need help in completing a transaction? Chat live with a
                        support team member
                      </p>
                      <button>Chat Now</button>
                    </div>
                  </div>
                </div>
                {/* Notes section */}
                <div className="row mt-5">
                  <div className="col-lg-12">
                    <div className="notes-dashboard-section">
                      <div className="card-header-title">
                        <h5>Notes</h5>
                      </div>
                      <ul className="p-0 notes-section">
                        <img src="/imgs/svgs/round-bold.svg" />
                        <li>Remember to complete Susan B.’s address change</li>
                      </ul>
                    </div>
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

export default Dashboard;
