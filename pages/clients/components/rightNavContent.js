import format from "date-fns/format";
import numeral from "numeral";

export default function RightNavContent(props) {
  const { notification } = props;

  if (!notification) return null;

  const { contract } = notification;

  return (
    <div className="row hl-100">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-pils pt-info-noti">
        <ul
          className="nav nav-pills nav-custom-pills nav-pills-support  mb-3"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link-custom active"
              id="pills-info-tab"
              data-toggle="pill"
              href="#pills-infos"
              role="tab"
              aria-controls="pills-infos"
              aria-selected="true"
            >
              Info
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link-custom"
              id="pills-forms-tab"
              data-toggle="pill"
              href="#pills-forms"
              role="tab"
              aria-controls="pills-forms"
              aria-selected="false"
            >
              Forms
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link-custom"
              id="pills-tab3-tab"
              data-toggle="pill"
              href="#pills-tab3"
              role="tab"
              aria-controls="pills-tab3"
              aria-selected="false"
            >
              Tabs
            </a>
          </li>
        </ul>
        <div
          className="tab-content tab-custom-supportsection"
          id="pills-tabContent"
        >
          <div
            className="tab-pane fade show active col-width-suportsection"
            id="pills-infos"
            role="tabpanel"
            aria-labelledby="pills-info-tab"
          >
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-2 col-12 align-self-center">
                <div className="userPicSection-info">
                  <img src="/imgs/profile-pic.png" alt="user picture" />
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-7 col-12 align-self-center">
                <div className="client-information-section-info">
                  <h6>{contract.ownerName}</h6>
                  <p>Client Information</p>
                </div>
                <div className="msg-contentsection">
                  <p></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-12 col-12 align-self-center">
                <div className="client-information-section-info">
                  <h6>{numeral(contract.value).format("$0,0.00")}</h6>
                  <p>Withdrawal</p>
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12 col-12 align-self-center">
                <div className="client-information-section-info">
                  <h6>{contract.contract}</h6>
                  <p>Contract Number</p>
                </div>
              </div>
            </div>
            <div className="date-section-info">
              <p>{format(new Date(), "MMMM d h:mm aaaa")}</p>
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
  );
}
