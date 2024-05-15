import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../RecipeForm.css'; // Import CSS file for styling

const RecipeForm = ({ isEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({ name: '', description: '' });

  useEffect(() => {
    if (isEdit && id) {
      axios.get(`http://localhost:5000/api/recipes/${id}`)
        .then(response => setRecipe(response.data))
        .catch(error => console.error(error));
    }
  }, [isEdit, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prevRecipe => ({ ...prevRecipe, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      axios.put(`http://localhost:5000/api/recipes/${id}`, recipe)
        .then(() => navigate('/'))
        .catch(error => console.error(error));
    } else {
      axios.post('http://localhost:5000/api/recipes', recipe)
        .then(() => navigate('/'))
        .catch(error => console.error(error));
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={recipe.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={recipe.description} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-btn">Save</button>
      </form>
    </div>
  );
};

export default RecipeForm;
