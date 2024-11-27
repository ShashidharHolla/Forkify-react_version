import { createContext } from "react";

export const RecipeContext = createContext({
  recipe: {},
  search: {
    query: "",
    results: [],
    page: 1,
    totalPages: 1,
    resultsPerPage: 10,
  },
  bookmarks: [],
  isLoading: false,
  isSelected: null,
  id: "",
  recipeIsAdded: false,
  uploadIsInProgress: false,
  errorHasOccured: false,
  errorMessage: "",
  onSearchClick: () => {},
  onRecipeClick: () => {},
  onAddRecipe: () => {},
  onPagination: () => {},
  onServingUpdate: () => {},
  onBookmark: () => {},
  onRecipeCancel: () => {},
  submit: () => {},
  onError: () => {},
});
