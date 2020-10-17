import { useEffect, useState } from "react";
import Link from "next/link";

export default function RightSideNav(props) {
    const { isNavOpen } = props;
    //   let [activePath, setActivePath] = useState("");

    //   useEffect(() => {
    //     setActivePath(window.location.pathname);
    //   }, []);

    if (!isNavOpen) {
        return (
            <div>
                <button className="btn-arrow-icon-right" onClick={() => props.toggleRightSideNav()}><img src="/imgs/svgs/rightarrow-icon-white.svg " /></button>
            </div>
        );
    }

    return (
        <div className="col-lg-3 col-md-12 px-0 order-second">
            <div className="sidebar-right">
                <div className="logo-section text-center">
                    <button className="btn-arrow-icon-2" onClick={() => props.toggleRightSideNav()}><img src="/imgs/svgs/rightarrow-icon1.svg" /></button>
                </div>
                <div className="row h-100">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-pils pt-info-noti">
                        <ul
                            className="nav nav-pills nav-custom-pills nav-pills-support  mb-3"
                            id="pills-tab"
                            role="tablist"
                        >
                            <li className="nav-item">
                                <a className="nav-link-custom active"
                                    id="pills-info-tab"
                                    data-toggle="pill"
                                    href="#pills-infos"
                                    role="tab"
                                    aria-controls="pills-infos"
                                    aria-selected="true">
                                    Info
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link-custom"
                                    id="pills-forms-tab"
                                    data-toggle="pill"
                                    href="#pills-forms"
                                    role="tab"
                                    aria-controls="pills-forms"
                                    aria-selected="false">
                                    Forms
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link-custom"
                                    id="pills-tab3-tab"
                                    data-toggle="pill"
                                    href="#pills-tab3"
                                    role="tab"
                                    aria-controls="pills-tab3"
                                    aria-selected="false">
                                    Tabs
                                </a>
                            </li>
                        </ul>
                        <div
                            className="tab-content tab-custom-supportsection"
                            id="pills-tabContent">
                            <div className="tab-pane fade show active col-width-suportsection" id="pills-infos" role="tabpanel"
                                aria-labelledby="pills-info-tab">
                                <div className="row h-100">
                                    <div className="col-lg-4 col-md-4 col-sm-2 col-12 align-self-center">
                                        <div className="userPicSection-info">
                                            <img
                                                src="/imgs/profile-pic.png"
                                                alt="user picture"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-7 col-12 align-self-center">
                                        <div className="client-information-section-info">
                                            <h6>Jane Doe</h6>
                                            <p>Client Information</p>
                                        </div>
                                        <div className="msg-contentsection">
                                            {/* <p>{notification.message}</p> */}
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row h-100">
                                    <div className="col-lg-5 col-md-5 col-sm-12 col-12 align-self-center">
                                        <div className="client-information-section-info">
                                            <h6>$1,500</h6>
                                            <p>Withdrawal</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-sm-12 col-12 align-self-center">
                                        <div className="client-information-section-info">
                                            <h6>XX123456789</h6>
                                            <p>Contract Number</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="date-section-info">
                                    <p>October 12 12:55pm</p>
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className="recent-activity-info">
                                    <p>Recent Activity</p>
                                </div>
                                <div className="chat-support-info">
                                    <button>Chat with Support</button>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade column-width-pills col-width-suportsection"
                                id="pills-forms"
                                role="tabpanel"
                                aria-labelledby="pills-forms-tab"
                            ></div>
                            <div
                                className="tab-pane fade column-width-pills col-width-suportsection"
                                id="pills-tab3"
                                role="tabpanel"
                                aria-labelledby="pills-tab3"
                            ></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
