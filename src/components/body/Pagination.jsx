import { useContext } from "react";

import icons from "../../assets/icons.svg";
import { RecipeContext } from "../../store/recipe-context.jsx";

export default function Pagination() {
  const {
    recipes: {
      search: { results, page, totalPages },
    },
    onPagination,
  } = useContext(RecipeContext);
  return (
    <div className="pagination">
      <button
        disabled={page === 1}
        className={`btn--inline ${
          page === 1 ? "pagination__btn--inactive" : undefined
        }`}
        onClick={() => onPagination(page - 1)}
      >
        <svg className="search__icon">
          <use href={`${icons}#icon-arrow-left`}></use>
        </svg>
        <span>Page {page - 1}</span>
      </button>
      {!results.length ? (
        ""
      ) : (
        <span className="pagination__center">Total Pages: {totalPages}</span>
      )}
      <button
        disabled={page === totalPages}
        className={`btn--inline ${
          page === totalPages ? "pagination__btn--inactive" : undefined
        }`}
        onClick={() => onPagination(page + 1)}
      >
        <span>Page {page + 1}</span>
        <svg className="search__icon">
          <use href={`${icons}#icon-arrow-right`}></use>
        </svg>
      </button>
    </div>
  );
}
