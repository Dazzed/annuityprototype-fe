import { useState } from "react";
import numeral from "numeral";
import axios from "axios";
import _ from "lodash";

import { API_URL } from "../../../config/constants";

export default function RightNavContent(props) {
  const [isRequesting, setIsRequesting] = useState(false);
  const { contract = {} } = props;
  const form = contract && contract.form;
  const formStatus = _.startCase(form ? form.status : "Not Requested");

  const sendSignatureRequest = async (contractId) => {
    try {
      if (form) {
        // request already sent
        return;
      }

      setIsRequesting(true);

      await axios.post(
        `${API_URL}/contracts/send-signature-request/${contractId}`
      );

      setIsRequesting(false);
      props.loadRecords();
    } catch (error) {
      setIsRequesting(false);
      console.log(error);
    }
  };

  return (
    <div className="row hl-100">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-pils">
        <ul
          className="nav nav-pills nav-custom-pills nav-pills-support  mb-3 pt-info-noti pr-0"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link-custom nav-link-rc active"
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
              className="nav-link-custom nav-link-rc"
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
              className="nav-link-custom nav-link-rc"
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
              <div className="col-lg-12">
                <div className="user-Crightsidebar-profile">
                  <div className="user-Crightsidebar-pic">
                    <img src="/imgs/profile-pic.png" />
                  </div>
                  <div className="user-Cinformation">
                    <h3>{contract.ownerName}</h3>
                    <p>{contract.contract}</p>
                  </div>
                  <div className="user-Cinformation border-none user-Cage">
                    <h3>Age</h3>
                    <p>{contract.ageO}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row valueCContainer">
              <div className="col-lg-6 pd-Cr">
                <div className="contractValueRightC">
                  <p>Contract Value</p>
                  <h3>{numeral(contract.value).format("$0,0.00")}</h3>
                </div>
              </div>
              <div className="col-lg-6 pd-Cl">
                <div className="contractValueRightC ml-C">
                  <p>Product</p>
                  <h3>{contract.product}</h3>
                </div>
              </div>
            </div>
            <div className="row valueCContainer mt-3">
              <div className="col-lg-6 pd-Cr">
                <div className="contractValueRightC">
                  <p>Issued 11/1/2000</p>
                  <h3>20 Years</h3>
                </div>
              </div>
              <div className="col-lg-6 pd-Cl">
                <div className="contractValueRightC borderCyellow ml-C">
                  <p>Anniversary</p>
                  <h3>&#x0003C;1 month</h3>
                  <img src="/imgs/svgs/fe_warning-icon.svg" />
                </div>
              </div>
            </div>
            <div className="row valueCContainer mt-4">
              <div className="col-lg-12">
                <div className="steppedC-section">
                  <h5>Stepped up Death Benefit Rider</h5>
                  <p>Details</p>
                  <img src="/imgs/svgs/rightarrow-large-black.svg" />
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="performtask-section">
              <div className="form-group form-custom-rightnav">
                <div className="client-information-section-info mb-2 mt-4">
                  <h6>Form Status</h6>
                  <p>{formStatus}</p>
                </div>
                <label htmlFor="exampleFormControlSelect1">
                  Perform a Task
                </label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="form">Form</option>
                  <option>Withdrawal</option>
                  <option>Withdrawal</option>
                </select>
                <button
                  className={form && form.isCompleted ? "btn-success" : ""}
                  onClick={() => sendSignatureRequest(contract.id)}
                  disabled={Boolean(form) || isRequesting} // form exist if request is already sent or currently requesting
                >
                  {!form ? "Request" : form.isCompleted ? "Success" : "Pending"}
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
