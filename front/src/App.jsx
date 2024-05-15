import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import RecipeForm from './components/RecipeForm';
import './index.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/recipes')
      .then(response => setRecipes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<RecipeList recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add" element={<RecipeForm />} />
        <Route path="/edit/:id" element={<RecipeForm isEdit />} />
      </Routes>
    </div>
  );
};

export default App;
