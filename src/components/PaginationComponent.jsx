import React, { useContext } from "react";
import MyContext from "../MyContext";
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
  const { setStorageItems } = useContext(MyContext);

  const nextPageButton = async () => {
    const { data } = await axios(pages[currentPage + 1]);

    setRecipes([...data.hits]);
    setCurrentPage(currentPage + 1);

    setStorageItems([
      ["recipes", JSON.stringify([...data.hits])],
      ["currentPage", JSON.stringify(currentPage + 1)],
    ]);

    if (data._links.next) {
      setPages([...pages, data._links.next.href]);
      setStorageItems([
        ["pages", JSON.stringify([...pages, data._links.next.href])],
      ]);
    } else {
      setPages([...pages, "No more results"]);
      setStorageItems([
        ["pages", JSON.stringify([...pages, "No more results"])],
      ]);
    }

    window.scrollTo(0, 0);
  };

  const previousPageButton = async () => {
    if (currentPage) {
      const { data } = await axios(pages[currentPage - 1]);

      const pagesCopy = [...pages];
      pagesCopy.pop();

      setRecipes([...data.hits]);
      setCurrentPage(currentPage - 1);
      setPages([...pagesCopy]);

      setStorageItems([
        ["recipes", JSON.stringify([...data.hits])],
        ["currentPage", JSON.stringify(currentPage - 1)],
        ["pages", JSON.stringify([...pagesCopy])],
      ]);

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
