import { useContext } from "react";

import icons from "../../assets/icons.svg";
import { RecipeContext } from "../../store/recipe-context.jsx";

export default function ErrorPage() {
  const {
    recipes: { errorMessage },
    onError,
  } = useContext(RecipeContext);
  return (
    <div className="error">
      <div>
        <svg>
          <use href={`${icons}#icon-alert-triangle`}></use>
        </svg>
      </div>
      <p>{errorMessage}</p>
      <button onClick={onError}>Close</button>
    </div>
  );
}
