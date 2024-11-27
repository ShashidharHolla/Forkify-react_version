import { useContext } from "react";

import Spinner from "../modal/Spinner.jsx";
import RecipeDefaultUI from "./RecipeDefaultUI.jsx";
import RecipeDetailFig from "./RecipeDetailFig.jsx";
import RecipeDetailServings from "./RecipeDetailServings.jsx";
import RecipeDetailIngredients from "./RecipeDetailIngredients.jsx";
import RecipeDetailLink from "./RecipeDetailLink.jsx";

import { RecipeContext } from "../../store/recipe-context.jsx";

export default function Recipe() {
  const {
    recipes: { recipe, isSelected },
  } = useContext(RecipeContext);

  if (!recipe.length && isSelected === null) {
    return (
      <div className="recipe">
        <RecipeDefaultUI />
      </div>
    );
  }

  return (
    <div className="recipe">
      {isSelected ? (
        <Spinner />
      ) : (
        <>
          <RecipeDetailFig />
          <RecipeDetailServings />
          <RecipeDetailIngredients />
          <RecipeDetailLink />
        </>
      )}
    </div>
  );
}
