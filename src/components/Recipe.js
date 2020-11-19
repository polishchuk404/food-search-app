import React from "react";
import RecipeDetails from "./RecipeDetails";

const Recipe = ({ recipe }) => {
  const { label, image, url, ingredients, healthLabels } = recipe.recipe;

  return (
    <div className="recipe">
      <div>
        <h2>{label}</h2>
      </div>
      <div>
        <img src={image} alt={label} />
        {/* <p className="healthLabels">{healthLabels.map(name => name).join(', ')}</p> */}
      </div>
      <div >
        {<RecipeDetails ingredients={ingredients} />}
      </div>
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer">see full recipe 🡢</a>
      </div>
    </div>
  );
};

export default Recipe;
