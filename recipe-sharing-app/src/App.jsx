import React from 'react';
import { Routes, Route, Link, Router } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1><Link to="/" style={{ textDecoration: 'none' }}>Recipe Sharing App</Link></h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
