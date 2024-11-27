import { useContext } from "react";

import CopyRight from "../footer/CopyRight.jsx";
import Spinner from "../modal/Spinner.jsx";
import Pagination from "./Pagination.jsx";
import Preview from "./Preview.jsx";
import { SLICE } from "../util/helper.js";

import { RecipeContext } from "../../store/recipe-context.jsx";

export default function SearchResult() {
  const {
    recipes: {
      id,
      search: { results, page },
      isLoading,
    },
    onRecipeClick,
  } = useContext(RecipeContext);

  return (
    <div className="search-results">
      <ul className="results">
        {isLoading ? (
          <Spinner />
        ) : (
          <Preview
            recipesId={id}
            onRecipeClick={onRecipeClick}
            results={SLICE(
              results,
              Number(`${page - 1}0`),
              Number(`${page - 1}0`) + 10
            )}
          />
        )}
      </ul>
      <Pagination />
      <CopyRight />
    </div>
  );
}
