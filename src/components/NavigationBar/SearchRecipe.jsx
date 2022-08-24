import React, { useState } from "react";
import { Form, FloatingLabel, Button, Modal } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchRecipe = (props) => {
  const {
    setSearchKeyword,
    setRecipes,
    setPages,
    setCurrentPage,
    showSpinner,
    hideSpinner,
    setStorageItems,
    removeStorageItems,
  } = props;

  const [queryText, setQueryText] = useState("");
  const [searchModal, setSearchModal] = useState(false);

  const showModal = () => setSearchModal(true);
  const hideModal = () => setSearchModal(false);

  const navigate = useNavigate();

  const searchHandler = async (e) => {
    e.preventDefault();
    showSpinner();

    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${queryText}&app_id=2f5498b7&app_key=ccb0994fa759c8bb890e6ac4e7124c19`;
    const { data } = await axios(url);

    removeStorageItems(["pages"]);
    setPages([]);

    if (!data.hits.length) {
      navigate("/no-result", { replace: true });
    } else {
      const keyword = queryText.split(" ").join("%20");

      setStorageItems([
        ["recipes", JSON.stringify([...data.hits])],
        ["searchKeyword", JSON.stringify(keyword)],
        ["currentPage", 0],
      ]);

      setRecipes([...data.hits]);
      setSearchKeyword(keyword);
      setCurrentPage(0);

      if (data._links.next) {
        setStorageItems([
          ["pages", JSON.stringify([url, data._links.next.href])],
        ]);
        setPages([url, data._links.next.href]);
      } else {
        setStorageItems([["pages", JSON.stringify([url, "No more results"])]]);
        setPages([url, "No more results"]);
      }

      navigate(`/${queryText}`, { replace: true });
    }

    setQueryText("");
    hideSpinner();
    hideModal();
  };

  return (
    <>
      <Button type="button" variant="success" onClick={showModal}>
        Search <FaSearch className="fs-4" />
      </Button>
      <Modal show={searchModal} onHide={hideModal}>
        <Form onSubmit={searchHandler}>
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
              Search
            </Button>
          </FloatingLabel>
        </Form>
      </Modal>
    </>
  );
};

export default SearchRecipe;
