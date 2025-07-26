import { create } from 'zustand';

const filterBySearchTerm = (recipes, term) => {
  return recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(term.toLowerCase())
  );
};

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    set({
      recipes: updatedRecipes,
      filteredRecipes: filterBySearchTerm(updatedRecipes, get().searchTerm),
    });
  },

  updateRecipe: (updatedRecipe) => {
    const updatedRecipes = get().recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    set({
      recipes: updatedRecipes,
      filteredRecipes: filterBySearchTerm(updatedRecipes, get().searchTerm),
    });
  },

  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((r) => r.id !== id);
    set({
      recipes: updatedRecipes,
      filteredRecipes: filterBySearchTerm(updatedRecipes, get().searchTerm),
      favorites: get().favorites.filter((favId) => favId !== id),
    });
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = filterBySearchTerm(recipes, searchTerm);
    set({ filteredRecipes: filtered });
  },

  setRecipes: (recipes) => {
    set({ recipes, filteredRecipes: recipes });
  },

  addFavorite: (recipeId) => {
    if (!get().favorites.includes(recipeId)) {
      set((state) => ({ favorites: [...state.favorites, recipeId] }));
    }
  },

  removeFavorite: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    }));
  },

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (r) => favorites.includes(r.id) && Math.random() > 0.3
    );
    set({ recommendations: recommended });
  },
}));
