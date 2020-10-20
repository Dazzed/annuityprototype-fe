import numeral from "numeral";
import format from "date-fns/format";

export default function RightNavContent(props) {
  const { contract = {} } = props;

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
              History
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
            {/* <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 align-self-center">
                <div className="notifcation-section">
                  <div className="userPicSection-info">
                    <img src="/imgs/profile-pic.png" alt="user picture" />
                  </div>
                  <div className="client-information-section-info">
                    <h6>{contract.ownerName}</h6>
                    <p>Client Information</p>
                  </div>
                  <div className="msg-contentsection">
                    {/* <p>{notification.message}</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 align-self-center px-0">
                <div className="client-information-section-info">
                  <h6>{numeral(contract.value).format("$0,0.00")}</h6>
                  <p>Withdrawal</p>
                </div>
                <div className="client-information-section-info">
                  <h6>{contract.contract}</h6>
                  <p>Contract Number</p>
                </div>
              </div>
            </div>
            <div className="performtask-section">
              <div class="form-group form-custom-rightnav">
                <label for="exampleFormControlSelect1">Perform a Task</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Withdrawal</option>
                  <option>Withdrawal</option>
                  <option>Withdrawal</option>
                </select>
                <button>Next</button>
              </div>
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
