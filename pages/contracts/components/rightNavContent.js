import numeral from "numeral";
import axios from "axios";
import _ from "lodash";

import { API_URL } from "../../../config/constants";

export default function RightNavContent(props) {
  const { contract = {} } = props;
  const form = contract && contract.form;
  const formStatus = _.startCase(form ? form.status : "Not Requested");

  const sendSignatureRequest = async (contractId) => {
    try {
      if (form) {
        // request already sent
        return;
      }

      const result = await axios.post(
        `${API_URL}/contracts/send-signature-request/${contractId}`
      );
      props.loadRecords();
    } catch (error) {
      console.log(error);
    }
  };

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
                <div className="client-information-section-info">
                  <h6>Form Status</h6>
                  <p>{formStatus}</p>
                </div>
              </div>
            </div>
            <div className="performtask-section">
              <div className="form-group form-custom-rightnav">
                <label htmlFor="exampleFormControlSelect1">
                  Perform a Task
                </label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="form">Form</option>
                  <option>Withdrawal</option>
                  <option>Withdrawal</option>
                </select>
                <button
                  onClick={() => sendSignatureRequest(contract.id)}
                  disabled={Boolean(form)} // form exist if request is already sent
                >
                  Next
                </button>
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
