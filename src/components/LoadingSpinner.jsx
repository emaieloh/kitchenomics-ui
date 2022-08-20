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
      <Button variant="secondary" disabled>
        <Spinner
          as="div"
          animation="border"
          role="status"
          aria-hidden="true"
          size="lg"
        />
        &nbsp;Loading...
      </Button>
    </Modal>
  );
};

export default LoadingSpinner;
