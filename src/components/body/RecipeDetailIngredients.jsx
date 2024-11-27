import { useContext } from "react";

import icons from "../../assets/icons.svg";
import { RecipeContext } from "../../store/recipe-context.jsx";

export default function RecipeDetailIngredients() {
  const {
    recipes: { recipe },
  } = useContext(RecipeContext);
  return (
    <div className="recipe__ingredients">
      <h2 className="heading--2">Recipe ingredients</h2>
      <ul className="recipe__ingredient-list">
        {[...recipe.ingredients].map((item, index) => {
          return (
            <li
              className="recipe__ingredient"
              key={`${item.quantity}${item.description}${index}`}
            >
              <svg className="recipe__icon">
                <use href={`${icons}#icon-check`}></use>
              </svg>
              <div className="recipe__quantity">{item.quantity ?? ""}</div>
              <div className="recipe__description">
                <span className="recipe__unit">{item.unit}</span>
                {item.description}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
