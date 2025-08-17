import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((recipes) => {
        const found = recipes.find((r) => r.id === parseInt(id));
        setRecipe(found);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return <h2 className="text-center mt-10">Loading recipe...</h2>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg">
      <Link to="/" className="text-green-600 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-4 shadow"
      />
      <p className="text-gray-700 mb-4">{recipe.summary}</p>

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index} className="text-gray-600">
            {ingredient}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p className="text-gray-700">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
