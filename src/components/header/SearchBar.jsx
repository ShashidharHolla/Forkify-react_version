import { useRef, useContext } from "react";
import icons from "../../assets/icons.svg";
import { RecipeContext } from "../../store/recipe-context.jsx";

export default function SearchBar() {
  const { onSearchClick } = useContext(RecipeContext);
  const search = useRef();

  function handleSearchClick() {
    onSearchClick(search.current.value);
    search.current.value = "";
  }

  return (
    <form className="search">
      <input
        ref={search}
        type="text"
        className="search__field"
        placeholder="Search over 1,000,000 recipes..."
      />
      <button
        type="button"
        className="btn search__btn"
        onClick={handleSearchClick}
      >
        <svg className="search__icon">
          <use href={`${icons}#icon-search`}></use>
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
}
