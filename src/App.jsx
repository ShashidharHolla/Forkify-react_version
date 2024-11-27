import Header from "./components/header/Header.jsx";
import SearchResult from "./components/body/SearchResults.jsx";
import Recipe from "./components/body/Recipe.jsx";

import UploadPage from "./components/modal/UploadPage.jsx";
import RecipeContextProvider from "./store/forkify-app-context.jsx";

function App() {
  return (
    <RecipeContextProvider>
      <div className="container">
        <Header />
        <SearchResult />
        <Recipe />
      </div>
      <UploadPage />
    </RecipeContextProvider>
  );
}

export default App;
