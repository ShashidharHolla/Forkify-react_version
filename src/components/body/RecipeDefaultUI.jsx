import icons from "../../assets/icons.svg";

export default function RecipeDefaultUI() {
  return (
    <div className="message">
      <div>
        <svg>
          <use href={`${icons}#icon-smile`}></use>
        </svg>
      </div>
      <p>Start by searching for a recipe or an ingredient. Have fun!</p>
    </div>
  );
}
