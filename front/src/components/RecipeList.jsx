// RecipeList.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../RecipeList.css';

const RecipeList = ({ recipes }) => (
  <div className="recipe-list-container">
    <h2 className="title">STOCKS</h2>
    <div className="button-container">
      <Link to="/add" className="add-recipe-button">
        Add New Recipe
      </Link>
    </div>
    <ul className="recipe-list">
      {recipes.map(recipe => (
        <li key={recipe._id} className="recipe-item">
          <h3 className="recipe-name">{recipe.name}</h3>
          <Link to={`/recipe/${recipe._id}`} className="view-details-link">
            View Details
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default RecipeList;
