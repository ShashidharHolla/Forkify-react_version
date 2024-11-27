import { useContext } from "react";

import icons from "../../assets/icons.svg";
import { RecipeContext } from "../../store/recipe-context.jsx";

export default function BookmarkButton() {
  const {
    recipes: { bookmarks, id },
    onBookmark,
  } = useContext(RecipeContext);
  return (
    <button className="btn--round" onClick={() => onBookmark(id)}>
      <svg className="">
        <use
          href={`${icons}#icon-bookmark${
            bookmarks.find((recipe) => recipe.id === id) ? "-fill" : ""
          }`}
        ></use>
      </svg>
    </button>
  );
}
