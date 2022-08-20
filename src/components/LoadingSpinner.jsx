import React from "react";
import { Modal, Button, Spinner } from "react-bootstrap";

const LoadingSpinner = ({ spinner, hideSpinner }) => {
  return (
    <Modal
      show={spinner}
      onHide={hideSpinner}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Button variant="secondary" size="sm" disabled>
        <Spinner
          as="div"
          animation="border"
          role="status"
          aria-hidden="true"
          size="lg"
          className="align-middle"
        />
        &nbsp;&nbsp;Loading...
      </Button>
    </Modal>
  );
};

export default LoadingSpinner;
