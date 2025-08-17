import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dataJson from "../data.json";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataJson);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-600 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-white">🍴 Recipe Sharing</h1>
          <nav>
            <ul className="flex space-x-6 text-white font-medium">
              <li>
                <Link to="/" className="hover:text-yellow-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <a href="#recipes" className="hover:text-yellow-300 transition">
                  Recipes
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-300 transition">
                  Contact
                </a>
              </li>
              <li>
                <Link
                  to="/add-recipe"
                  className="hover:text-yellow-300 transition"
                >
                  Add Recipe
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-green-100 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Discover & Share Delicious Recipes
          </h2>
          <p className="text-lg text-gray-600">
            Explore new flavors, find inspiration, and share your favorite meals
            with the world 🌍
          </p>
        </div>
      </section>

      <section id="recipes" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Featured Recipes
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((recipe) => (
            <Link
              to={`/recipe/${recipe.id}`}
              key={recipe.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  {recipe.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {recipe.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-green-600 text-white text-center py-6 mt-12"
      >
        <p>&copy; 2025 Recipe Sharing Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
