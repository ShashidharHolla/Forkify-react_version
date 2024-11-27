import { useContext } from "react";

import icons from "../../assets/icons.svg";
import Preview from "../body/Preview.jsx";
import BookmarksDefaultUI from "./BookmarksDefaultUI.jsx";
import { RecipeContext } from "../../store/recipe-context.jsx";

export default function Bookmarks() {
  const {
    recipes: { bookmarks, id },
    onRecipeClick,
  } = useContext(RecipeContext);
  return (
    <li className="nav__item">
      <button className="nav__btn nav__btn--bookmarks">
        <svg className="nav__icon">
          <use href={`${icons}#icon-bookmark`}></use>
        </svg>
        <span>Bookmarks</span>
      </button>
      <div className="bookmarks">
        <ul className="bookmarks__list">
          {bookmarks.length == 0 ? (
            <BookmarksDefaultUI />
          ) : (
            <Preview
              recipesId={id}
              onRecipeClick={onRecipeClick}
              results={bookmarks}
            />
          )}
        </ul>
      </div>
    </li>
  );
}
