import { useContext } from "react";

import icons from "../../assets/icons.svg";
import BookmarkButton from "./BookmarkButton.jsx";
import UserRecipeIcon from "./UserRecipeIcon.jsx";
import { RecipeContext } from "../../store/recipe-context.jsx";

export default function RecipeDetailServings() {
  const {
    recipes: { recipe },
    onServingUpdate,
  } = useContext(RecipeContext);
  return (
    <div className="recipe__details">
      <div className="recipe__info">
        <svg className="recipe__info-icon">
          <use href={`${icons}#icon-clock`}></use>
        </svg>
        <span className="recipe__info-data recipe__info-data--minutes">
          {recipe.cooking_time}
        </span>
        <span className="recipe__info-text">minutes</span>
      </div>
      <div className="recipe__info">
        <svg className="recipe__info-icon">
          <use href={`${icons}#icon-users`}></use>
        </svg>
        <span className="recipe__info-data recipe__info-data--people">
          {recipe.servings}
        </span>
        <span className="recipe__info-text">servings</span>

        <div className="recipe__info-buttons">
          <button
            className="btn--tiny btn--increase-servings"
            disabled={recipe.servings === 1}
            onClick={() => onServingUpdate(Number(recipe.servings) - 1)}
          >
            <svg>
              <use href={`${icons}#icon-minus-circle`}></use>
            </svg>
          </button>
          <button
            className="btn--tiny btn--increase-servings"
            onClick={() => onServingUpdate(Number(recipe.servings) + 1)}
          >
            <svg>
              <use href={`${icons}#icon-plus-circle`}></use>
            </svg>
          </button>
        </div>
      </div>
      <UserRecipeIcon
        userClass={`recipe__user-generated ${
          !recipe.key ? "hidden" : undefined
        }`}
      />
      <BookmarkButton />
    </div>
  );
}
