// RecipeList.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => (
  <div style={{ marginLeft: '1em',padding:'100px'  }}>
    <h2 style={{ color: '#FF2D00', fontSize: '5.2em' }}>Recipe List</h2>
    <ul style={{ listStyleType: 'none', padding:50}}>
      {recipes.map(recipe => (
        <li key={recipe._id} style={{ marginBottom: '1em' }}>
          <h3 style={{ color: 'black', fontSize: '1.1em' }}>{recipe.name}</h3>
          <Link to={`/recipe/${recipe._id}`} style={{ color: 'red', textDecoration: 'none' }}>
            View Details
          </Link>
        </li>
      ))}
    </ul>
    <Link to="/add" style={{ color: 'white', fontSize: '1.1em', backgroundColor: 'lightcoral', padding: '0.5em 1em', borderRadius: '10px', textDecoration: 'none' }}>
      Add New Recipe
    </Link>
  </div>
);

export default RecipeList;
