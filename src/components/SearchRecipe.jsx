import React from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchRecipe = ({ searchHandler, queryText, setQueryText }) => {
  return (
    <Form className="w-50 mx-auto mb-1" onSubmit={searchHandler}>
      <FloatingLabel
        controlId="queryText"
        label="Search recipe"
        className="d-flex flex-row"
      >
        <Form.Control
          type="text"
          placeholder="Search recipe"
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
          className="rounded-0 rounded-start"
        />
        <Button
          type="submit"
          variant="success"
          className="rounded-0 rounded-end"
        >
          <FaSearch className="fs-4" />
        </Button>
      </FloatingLabel>
    </Form>
  );
};

export default SearchRecipe;
