import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import { v4 as uuid } from "uuid";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "1f866a3e";
  const APP_KEY = "3214b3247efcdbc83bc9a4591c49abed";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=30`;


  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      setRecipes(result.data.hits);
      console.log(result);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <h1>food search</h1>
      <form onSubmit={onSubmit} className="search-form">
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
        />
        <input type="submit" value="Search" />
        
      </form>
      <div className="products">
        
      </div>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map(recipe => <Recipe key={uuid()} recipe={recipe} />)}
      </div>
    </div>
  );
}

export default App;
