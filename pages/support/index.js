import React from "react";
import Head from "next/head";
import axios from "axios";

import SideNav from "../../components/sideNav";
import RightNav from "../../components/rightNav";
import RightNavContent from "./components/rightNavContent";
import NotificationItem from "./components/notificationItem";

class SupportPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
      selectedNotificationId: null,
      isNavOpen: true,
      rightNavState: 0,
    };

    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.expandRightNav = this.expandRightNav.bind(this);
    this.shrinkRightNav = this.shrinkRightNav.bind(this);
    this.selectNotification = this.selectNotification.bind(this);
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

  selectNotification(id) {
    console.log("notification.id", id);
    this.setState({ selectedNotificationId: id }, () =>
      this.expandRightNav(true)
    );
  }

  render() {
    const {
      notifications,
      isNavOpen,
      selectedNotificationId,
      rightNavState,
    } = this.state;

    return (
      <div
        className={`container-fluid h-100 ${
          isNavOpen ? "table-padding-container" : "pl-3"
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
                      <NotificationItem
                        key={notification.id}
                        notification={notification}
                        selectNotification={this.selectNotification}
                      />
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
          <RightNav
            navState={rightNavState}
            expandable={false}
            expandNav={this.expandRightNav}
            shrinkNav={this.shrinkRightNav}
          >
            <RightNavContent
              notification={notifications.find(
                (e) => e.id === selectedNotificationId
              )}
            />
          </RightNav>
        </div>
      </div>
    );
  }
}

export default SupportPage;
