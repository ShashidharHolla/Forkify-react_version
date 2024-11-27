import { useEffect, useState } from "react";

import { API_URL, KEY, RES_PER_PAGE } from "../components/util/config.js";
import { API, FETCHID, UpdateServings } from "../components/util/helper.js";
import { RecipeContext } from "./recipe-context.jsx";

const bookmark = JSON.parse(localStorage.getItem("bookmarks")) || [];

// eslint-disable-next-line react/prop-types
export default function RecipeContextProvider({ children }) {
  const [recipes, setRecipes] = useState({
    recipe: {},
    search: {
      query: "",
      results: [],
      page: 1,
      totalPages: 1,
      resultsPerPage: RES_PER_PAGE,
    },
    bookmarks: bookmark,
    isLoading: false,
    isSelected: null,
    id: "",
    recipeIsAdded: false,
    uploadIsInProgress: false,
    errorHasOccured: false,
    errorMessage: "",
  });

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(recipes.bookmarks));
  }, [recipes.bookmarks]);

  // Fetch search results
  useEffect(() => {
    if (recipes.search.query !== "") {
      try {
        async function fetchAPI() {
          const resData = await API(
            `${API_URL}?search=${recipes.search.query}&key=${KEY}`
          );

          setRecipes((prevState) => ({
            ...prevState,
            search: {
              ...prevState.search,
              results: resData.data.recipes,
              totalPages: Math.ceil(resData.data.recipes.length / RES_PER_PAGE),
            },
            isLoading: false,
          }));
        }
        fetchAPI();
      } catch (err) {
        console.log(err);
        setRecipes((prevState) => ({
          ...prevState,
          errorHasOccured: true,
          errorMessage: err.message,
        }));
      }
    }
  }, [recipes.search.query]);

  // Fetch individual recipe
  useEffect(() => {
    if (recipes.id !== "") {
      async function fetchRecipe() {
        const resData = await FETCHID(
          `${API_URL}${recipes.id}?key=${KEY}`,
          setRecipes
        );

        setRecipes((prevState) => ({
          ...prevState,
          recipe: resData.data.recipe,
          isSelected: false,
        }));
      }
      fetchRecipe();
    }
  }, [recipes.id]);

  function handleRecipeClick(id, event) {
    event.preventDefault();
    setRecipes((prevState) => ({
      ...prevState,
      id,
      isSelected: true,
    }));
  }

  function handleSearchClick(value) {
    setRecipes((prevState) => ({
      ...prevState,
      search: {
        ...prevState.search,
        query: value,
        page: 1,
      },
      isLoading: true,
    }));
  }

  function handlePagination(page) {
    setRecipes((prevState) => ({
      ...prevState,
      search: {
        ...prevState.search,
        page,
      },
    }));
  }

  function handleServingUpdates(newServings) {
    UpdateServings(newServings, recipes.recipe, setRecipes);
  }

  function handleBookMark(id) {
    if (recipes.bookmarks.find((recipe) => recipe.id === id)) {
      const bookmarkedRecipeList = recipes.bookmarks.filter(
        (recipe) => recipe.id !== id
      );
      console.log(bookmarkedRecipeList);

      setRecipes((prevState) => ({
        ...prevState,
        bookmarks: [...bookmarkedRecipeList],
      }));
    } else {
      const bookmarkedRecipe = recipes.search.results.filter(
        (recipe) => recipe.id === id
      );

      setRecipes((prevState) => ({
        ...prevState,
        bookmarks: [...prevState.bookmarks, ...bookmarkedRecipe],
      }));
    }
  }

  function handleAddRecipe(e) {
    e.preventDefault();
    setRecipes((prevState) => ({
      ...prevState,
      recipeIsAdded: true,
    }));
  }

  function handleAddRecipeCancel(e) {
    e.preventDefault();
    setRecipes((prevState) => ({
      ...prevState,
      recipeIsAdded: false,
    }));
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault(); // Prevent page reload
      setRecipes((prevState) => ({
        ...prevState,
        uploadIsInProgress: true,
      }));

      // Collecting form data
      const formData = new FormData(e.target);
      const recipeData = Object.fromEntries(formData.entries()); // Converts form data to an object

      // Parsing ingredients
      const ingredients = Object.entries(recipeData)
        .filter(
          (entry) => entry[0].startsWith("ingredient") && entry[1].trim() !== ""
        )
        .map((ingredient) => {
          const ingredientArr = ingredient[1].replaceAll(" ", "").split(",");
          if (ingredientArr.length !== 3)
            throw Error(
              "Wrong ingredient format! Please use the correct format :)"
            );
          const [quantity, unit, description] = ingredientArr;
          return {
            quantity: quantity ? Number(quantity) : null,
            unit,
            description,
          };
        });

      const recipe = {
        title: recipeData.title,
        source_url: recipeData.sourceUrl,
        image_url: recipeData.image,
        publisher: recipeData.publisher,
        cooking_time: Number(recipeData.cookingTime),
        servings: Number(recipeData.servings),
        ingredients,
      };

      const upload = await API(`${API_URL}?key=${KEY}`, recipe);
      console.log(upload.data.recipe);

      setRecipes((prevState) => ({
        ...prevState,
        search: {
          ...prevState.search,
          results: [upload.data.recipe, ...prevState.search.results],
        },
        addrecipe: false,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  function handleError() {}

  const contextValue = {
    recipes: { ...recipes },
    onSearchClick: handleSearchClick,
    onRecipeClick: handleRecipeClick,
    onAddRecipe: handleAddRecipe,
    onPagination: handlePagination,
    onServingUpdate: handleServingUpdates,
    onBookmark: handleBookMark,
    onRecipeCancel: handleAddRecipeCancel,
    submit: handleSubmit,
    onError: handleError,
  };
  console.log(recipes);

  return (
    <RecipeContext.Provider value={contextValue}>
      {children}
    </RecipeContext.Provider>
  );
}
