import logo from "../../assets/logo.png";
import AddRecipe from "./AddRecipe.jsx";
import SearchBar from "./SearchBar.jsx";
import Bookmarks from "./Bookmarks.jsx";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="image of fork and spoon" className="header__logo" />
      <SearchBar />
      <nav className="nav">
        <ul className="nav__list">
          <AddRecipe />
          <Bookmarks />
        </ul>
      </nav>
    </header>
  );
}
