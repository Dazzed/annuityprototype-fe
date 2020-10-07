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
        <div>{contractDetails.contract}</div>
      </Modal.Body>
    </Modal>
  );
}
