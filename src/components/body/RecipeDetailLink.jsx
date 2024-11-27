import icons from "../../assets/icons.svg";

export default function RecipeDetailLink() {
  return (
    <div className="recipe__directions">
      <h2 className="heading--2">How to cook it</h2>
      <p className="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span className="recipe__publisher">The Pioneer Woman</span>. Please
        check out directions at their website.
      </p>
      <a
        className="btn--small recipe__btn"
        href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
        target="_blank"
      >
        <span>Directions</span>
        <svg className="search__icon">
          <use href={`${icons}#icon-arrow-right`}></use>
        </svg>
      </a>
    </div>
  );
}
