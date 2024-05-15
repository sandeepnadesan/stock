import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../RecipeDetails.css'; // Import CSS file for styling

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/recipes/${id}`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="recipe-details-container">
      <h2 className="recipe-name">{recipe.name}</h2>
      <p className="recipe-description">{recipe.description}</p>
      <Link to={`/edit/${id}`} className="edit-link">Edit</Link>
    </div>
  );
};

export default RecipeDetails;
