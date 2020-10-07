import { Modal } from "react-bootstrap";

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
              <h4>Value as of 10/1/2020</h4>
              <h2>{contractDetails.value}</h2>
            </div>
          </div>
        </div>
        <div className="row mt-pils">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <ul class="nav nav-pills nav-custom-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item">
                <a class="nav-link-custom" id="pills-information-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Information</a>
              </li>
              <li class="nav-item">
                <a class="nav-link-custom active" id="pills-financial-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Financial Transactions</a>
              </li>
              <li class="nav-item">
                <a class="nav-link-custom" id="pills-non-financial-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Non-financial Transactions</a>
              </li>
              <li class="nav-item">
                <a class="nav-link-custom" id="pills-document-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Documents</a>
              </li>
            </ul>
            <div class="tab-content tab-custom-content" id="pills-tabContent">
              <div class="tab-pane fade show active column-width-pills" id="pills-home" role="tabpanel" aria-labelledby="pills-information-tab">
              </div>
              <div class="tab-pane fade column-width-pills" id="pills-profile" role="tabpanel" aria-labelledby="pills-financial-tab"></div>
              <div class="tab-pane fade column-width-pills" id="pills-contact" role="tabpanel" aria-labelledby="pills-non-financial-tab"></div>
              <div class="tab-pane fade column-width-pills" id="pills-contact" role="tabpanel" aria-labelledby="pills-non-document-tab"></div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal >
  );
}
