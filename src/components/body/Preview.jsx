import UserRecipeIcon from "./UserRecipeIcon.jsx";

export default function Preview({ recipesId, results, onRecipeClick }) {
  return results.map((recipe) => {
    return (
      <li
        key={recipe.id}
        className="preview"
        onClick={(e) => onRecipeClick(recipe.id, e)}
      >
        <a
          className={`preview__link ${
            recipe.id === recipesId ? "preview__link--active" : undefined
          }`}
          href={recipe.id}
        >
          <figure className="preview__fig">
            <img src={recipe.image_url} alt="pizza image" />
          </figure>
          <div className="preview__data">
            <h4 className="preview__title">{recipe.title}</h4>
            <p className="preview__publisher">{recipe.publisher}</p>
            {recipe.key ? (
              <UserRecipeIcon userClass={"preview__user-generated"} />
            ) : (
              ""
            )}
          </div>
        </a>
      </li>
    );
  });
}
