import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    set({
      recipes: updatedRecipes,
      filteredRecipes: filterBySearchTerm(updatedRecipes, get().searchTerm)
    });
  },

  updateRecipe: (updatedRecipe) => {
    const updatedRecipes = get().recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    set({
      recipes: updatedRecipes,
      filteredRecipes: filterBySearchTerm(updatedRecipes, get().searchTerm)
    });
  },

  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((r) => r.id !== id);
    set({
      recipes: updatedRecipes,
      filteredRecipes: filterBySearchTerm(updatedRecipes, get().searchTerm)
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
}));

const filterBySearchTerm = (recipes, term) => {
  return recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(term.toLowerCase())
  );
};
