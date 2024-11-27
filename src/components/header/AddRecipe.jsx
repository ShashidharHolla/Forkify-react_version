import { useContext } from "react";
import icons from "../../assets/icons.svg";
import { RecipeContext } from "../../store/recipe-context.jsx";

export default function AddRecipe() {
  const { onAddRecipe } = useContext(RecipeContext);
  return (
    <li className="nav__item">
      <button className="nav__btn nav__btn--add-recipe" onClick={onAddRecipe}>
        <svg className="nav__icon">
          <use href={`${icons}#icon-edit`}></use>
        </svg>
        <span>Add recipe</span>
      </button>
    </li>
  );
}
