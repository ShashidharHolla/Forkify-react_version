import { useContext } from "react";

import icons from "../../assets/icons.svg";
import ErrorPage from "./ErrorPage.jsx";
import { RecipeContext } from "../../store/recipe-context.jsx";

export default function UploadPage() {
  const {
    recipes: {
      recipeIsAdded,
      uploadIsInProgress,
      errorHasOccured,
      errorMessage,
    },
    onRecipeCancel,
    submit,
  } = useContext(RecipeContext);
  return (
    <>
      <div
        className={`overlay ${recipeIsAdded ? undefined : "hidden"}`}
        onClick={onRecipeCancel}
      ></div>

      {errorHasOccured ? (
        <ErrorPage message={errorMessage} />
      ) : (
        <div
          className={`add-recipe-window ${
            recipeIsAdded ? undefined : "hidden"
          }`}
        >
          <button className="btn--close-modal" onClick={onRecipeCancel}>
            &times;
          </button>
          <form className="upload" onSubmit={submit}>
            <div className="upload__column">
              <h3 className="upload__heading">Recipe data</h3>
              <label>Title</label>
              <input required name="title" type="text" />
              <label>URL</label>
              <input required name="sourceUrl" type="text" />
              <label>Image URL</label>
              <input required name="image" type="text" />
              <label>Publisher</label>
              <input required name="publisher" type="text" />
              <label>Prep time</label>
              <input required name="cookingTime" type="number" />
              <label>Servings</label>
              <input required name="servings" type="number" />
            </div>

            <div className="upload__column">
              <h3 className="upload__heading">Ingredients</h3>
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index}>
                  <label htmlFor={`ingredient-${index + 1}`}>
                    Ingredient {index + 1}
                  </label>
                  <input
                    id={`ingredient-${index + 1}`}
                    name={`ingredient-${index + 1}`}
                    type="text"
                    placeholder="Format: 'Quantity,Unit,Description'"
                  />
                </div>
              ))}
            </div>

            <button className="btn upload__btn" disabled={uploadIsInProgress}>
              <svg>
                <use href={`${icons}#icon-upload-cloud`}></use>
              </svg>
              <span>Upload</span>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
