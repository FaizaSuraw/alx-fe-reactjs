import { useParams, Link } from "react-router-dom";
import recipes from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <h2 className="text-center mt-10">Recipe not found</h2>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back button */}
      <Link
        to="/"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Back to Recipes
      </Link>

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-80 object-cover rounded-lg shadow-md"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mt-6">{recipe.title}</h1>

      {/* Summary */}
      <p className="text-gray-700 mt-3">{recipe.summary}</p>

      {/* Dummy Ingredients */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>1 cup sample ingredient</li>
          <li>2 tbsp another ingredient</li>
          <li>3 cloves garlic (minced)</li>
          <li>Salt & pepper to taste</li>
        </ul>
      </div>

      {/* Dummy Steps */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-600 space-y-2">
          <li>Prepare the ingredients as listed above.</li>
          <li>Heat oil in a pan and add garlic.</li>
          <li>Add the main ingredients and stir fry.</li>
          <li>Season well and serve hot.</li>
        </ol>
      </div>
    </div>
  );
}
