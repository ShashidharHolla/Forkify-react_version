import { useContext } from "react";

import { RecipeContext } from "../../store/recipe-context.jsx";

export default function RecipeDetailFig() {
  const {
    recipes: { recipe },
  } = useContext(RecipeContext);
  return (
    <figure className="recipe__fig">
      <img src={recipe.image_url} alt="Tomato" className="recipe__img" />
      <h1 className="recipe__title">
        <span>{recipe.title}</span>
      </h1>
    </figure>
  );
}
