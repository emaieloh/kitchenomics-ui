import React from "react";
import { Pagination } from "react-bootstrap";
import axios from "axios";

const PaginationComponent = (props) => {
  const {
    recipes,
    pages,
    currentPage,
    setRecipes,
    setPages,
    setCurrentPage,
  } = props;

  const nextPageButton = async () => {
    const { data } = await axios(pages[currentPage + 1]);
    setRecipes([...data.hits]);
    setCurrentPage(currentPage + 1);
    if (data._links.next) {
      setPages([...pages, data._links.next.href]);
    } else {
      setPages([...pages, "No more results"]);
    }
    window.scrollTo(0, 0);
  };

  const previousPageButton = async () => {
    if (currentPage) {
      const { data } = await axios(pages[currentPage - 1]);
      setRecipes([...data.hits]);
      setCurrentPage(currentPage - 1);
      const pagesCopy = [...pages];
      pagesCopy.pop();
      setPages([...pagesCopy]);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {recipes.length ? (
        <Pagination className="justify-content-center">
          {!currentPage ? (
            <Pagination.Prev disabled />
          ) : (
            <Pagination.Prev onClick={previousPageButton} />
          )}
          {pages[pages.length - 1] === "No more results" ? (
            <Pagination.Next disabled />
          ) : (
            <Pagination.Next onClick={nextPageButton} />
          )}
        </Pagination>
      ) : (
        ""
      )}
    </>
  );
};

export default PaginationComponent;
