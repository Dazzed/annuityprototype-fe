import React from "react";
import Head from "next/head";
import axios from "axios";
import format from "date-fns/format";
import SideNav from "../../components/sideNav";

class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
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
    const { notifications, isNavOpen } = this.state;

    return (
      <div
        className="container-fluid h-100"
        style={!isNavOpen ? { marginLeft: "0px" } : {}}
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
          <div
            className={`col-lg-${
              isNavOpen ? "9" : "12"
            } col-md-12 col-sm-12 col-12`}
          >
            <div className="row common-pd pt-lg-3">
              <div className="col-lg-12">
                <div className="search-box support-searchbox">
                  <input type="text" placeholder="Search" />
                  <img
                    src="/imgs/svgs/support-searchicon.svg"
                    id="icon"
                    className="search searchicon-support"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-pils">
                <ul
                  className="nav nav-pills nav-custom-pills nav-pills-support mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link-custom active"
                      id="pills-notifications-tab"
                      data-toggle="pill"
                      href="#pills-notifications"
                      role="tab"
                      aria-controls="pills-notifications"
                      aria-selected="true"
                    >
                      Notifications
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link-custom"
                      id="pills-tutorial-tab"
                      data-toggle="pill"
                      href="#pills-tutorial"
                      role="tab"
                      aria-controls="pills-tutorial"
                      aria-selected="false"
                    >
                      Tutorials
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link-custom"
                      id="pills-help"
                      data-toggle="pill"
                      href="#pills-help"
                      role="tab"
                      aria-controls="pills-help"
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
                    className="tab-pane fade show active col-width-suportsection"
                    id="pills-notifications"
                    role="tabpanel"
                    aria-labelledby="pills-notifications-tab"
                  >
                    {notifications.map((notification) => (
                      <div
                        className="row row-height-supportsection"
                        key={notification.id}
                      >
                        <div className="col-lg-2 col-md-2 col-sm-2 col-12 align-self-center">
                          <div className="userPicSection">
                            <img
                              src="/imgs/profile-pic.png"
                              alt="user picture"
                            />
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-7 col-12 align-self-center">
                          <div className="date-section">
                            <h6>
                              {format(
                                new Date(notification.timestamp),
                                "MMMM d h:mm a"
                              )}
                            </h6>
                          </div>
                          <div className="msg-contentsection">
                            <p>{notification.message}</p>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3 col-12 align-self-center">
                          <div className="seemore-section">
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
                    ))}
                  </div>
                  <div
                    className="tab-pane fade column-width-pills col-width-suportsection"
                    id="pills-tutorial"
                    role="tabpanel"
                    aria-labelledby="pills-tutorial-tab"
                  ></div>
                  <div
                    className="tab-pane fade column-width-pills col-width-suportsection"
                    id="pills-help"
                    role="tabpanel"
                    aria-labelledby="pills-help"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notifications;
