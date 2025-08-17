import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    else if (ingredients.split(",").length < 2)
      newErrors.ingredients = "Enter at least 2 ingredients, separated by commas";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps,
    };

    console.log("New Recipe:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setSuccess(true);

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Recipe</h2>
      {success && (
        <p className="mb-4 text-green-600 font-medium">
          Recipe submitted successfully!
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white font-semibold px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
