import React from "react";
import { Container, Card } from "react-bootstrap";

const NoResult = () => {
  return (
    <Container className="w-50 pt-5 mt-5">
      <Card className="mt-5">
        <Card.Body className="fs-1 fw-bold text-center">
          No results found.
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NoResult;
