import { Modal } from "react-bootstrap";
import numeral from "numeral";
import format from "date-fns/format";
import { CONTRACT_DUMMY_DATA } from "../../../config/constants";

export default function DetailedModal(props) {
  const { show, handleClose, contractDetails = {} } = props;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ border: "none" }}
      className="custom-map-modal"
    >
      <Modal.Header
        className="popup_title_addcontact"
        closeButton
        style={{ border: "none", paddingBottom: "0" }}
      ></Modal.Header>
      <Modal.Body className="profile_viewcontentmodal">
        <div className="row pt-3">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="contract-common-title">
              <h4>Contract Owner</h4>
              <h2>{contractDetails.ownerName}</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="contract-common-title">
              <h4>Contract Number</h4>
              <h2>{contractDetails.contract}</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="contract-common-title">
              <h4>Value as of {format(new Date(), "dd/MM/yyyy")}</h4>
              <h2>{numeral(contractDetails.value).format("$0,0.00")}</h2>
            </div>
          </div>
        </div>
        <div className="row mt-pils">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <ul
              className="nav nav-pills nav-custom-pills mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link-custom active"
                  id="pills-information-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Information
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link-custom"
                  id="pills-financial-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Financial Transactions
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link-custom"
                  id="pills-non-financial-tab"
                  data-toggle="pill"
                  href="#pills-contact"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Non-financial Transactions
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link-custom"
                  id="pills-document-tab"
                  data-toggle="pill"
                  href="#pills-contact"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Documents
                </a>
              </li>
            </ul>
            <div
              className="tab-content tab-custom-content"
              id="pills-tabContent"
            >
              <div
                className="tab-pane fade show active "
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-information-tab"
              >
                <h2 className="contract-modal-h2">Contract Values</h2>
                <div className="row">
                  <div className="col-lg-6 col-md-6 co-sm-12 col-12">
                    <table className="table no-boxshadow">
                      <tbody>
                        <tr>
                          <td>Annuitant:</td>
                          <td>{contractDetails.annuitantName}</td>
                        </tr>
                        <tr>
                          <td>Rep of Record:</td>
                          <td>{CONTRACT_DUMMY_DATA.rep_of_record}</td>
                        </tr>
                        <tr>
                          <td>Issue Date:</td>
                          <td>{contractDetails.annuitantName}</td>
                        </tr>
                        <tr>
                          <td>Plan Type:</td>
                          <td>{CONTRACT_DUMMY_DATA.plan_type}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-6 col-md-6 co-sm-12 col-12">
                    <table className="table no-boxshadow">
                      <tbody>
                        <tr>
                          <td>Surrender Value:</td>
                          <td>
                            {numeral(
                              CONTRACT_DUMMY_DATA.surrender_value
                            ).format("$0,0.00")}
                          </td>
                        </tr>
                        <tr>
                          <td>Total Premiums Paid:</td>
                          <td>
                            {numeral(
                              CONTRACT_DUMMY_DATA.total_premiums_paid
                            ).format("$0,0.00")}
                          </td>
                        </tr>
                        <tr>
                          <td>Total Withdrawls(YTD):</td>
                          <td>
                            {numeral(
                              CONTRACT_DUMMY_DATA.withdrawal_totals.ytd
                            ).format("$0,0.00")}
                          </td>
                        </tr>
                        <tr>
                          <td>Withdrawls Since Issue:</td>
                          <td>
                            {numeral(
                              CONTRACT_DUMMY_DATA.withdrawal_totals.since_issue
                            ).format("$0,0.00")}
                          </td>
                        </tr>
                        <tr>
                          <td>YTD Number of Trades:</td>
                          <td>{CONTRACT_DUMMY_DATA.trades.ytd}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col"></div>
                </div>
                <div className="column-width-pills table-contractvalue table-responsive-md">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Investment Options</th>
                        <th>Manager</th>
                        <th>Future %</th>
                        <th>Current %</th>
                        <th>Units</th>
                        <th>Unit Values</th>
                        <th>Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CONTRACT_DUMMY_DATA.contract_value.investment_options.map(
                        (value, i) => (
                          <tr key={i}>
                            <td>{value.investment_option_name}</td>
                            <td>{value.investment_option_manager}</td>
                            <td>{value.allocation.future}%</td>
                            <td>{value.allocation.current}%</td>
                            <td>
                              {numeral(value.value.units).format("$0,0.00")}
                            </td>
                            <td>
                              {numeral(value.value.unit_value).format(
                                "$0,0.00"
                              )}
                            </td>
                            <td>
                              {numeral(value.value.balance).format("$0,0.00")}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="tab-pane fade column-width-pills"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-financial-tab"
              ></div>
              <div
                className="tab-pane fade column-width-pills"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-non-financial-tab"
              ></div>
              <div
                className="tab-pane fade column-width-pills"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-non-document-tab"
              ></div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
