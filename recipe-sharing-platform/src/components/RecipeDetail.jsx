import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/recipes.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch recipes.json");
        return res.json();
      })
      .then((recipes) => {
        const found = recipes.find((r) => String(r.id) === id);
        setRecipe(found || null);
      })
      .catch((err) => {
        console.error("Error loading recipe:", err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!recipe) return <p className="p-6">Recipe not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{recipe.title}</h2>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow"
      />
      <p className="mt-4 text-gray-700">{recipe.summary}</p>

      {recipe.instructions && Array.isArray(recipe.instructions) && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Instructions</h3>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            {recipe.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;
