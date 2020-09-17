import axios from "axios";

export default {
  getRecipe: function (query) {
    //Todo: Change API key to ENV variable

    return axios.get(`https://api.edamam.com/search?q=${query}&app_id=` + process.env.REACT_APP_EDAMAM_ID + `&app_key=` + process.env.REACT_APP_EDAMAM_KEY);
  },
  deleteRecipe: function (id) {
    console.log(id);
    return axios.delete("/api/recipes/" + id).then(result => result.data);
  },
  // Saves a recipe to the database
  saveRecipe: function (recipeData) {
    return axios.post("/api/recipes", recipeData).then(result => result.data);
  },
  // Get the saved recipes from the database
  savedRecipes: function () {
    return axios.get("/api/recipes").then(result => result.data);
  },
  deleteIngredients: function (id) {
    console.log(id);
    return axios.delete("/api/recipes/ingredients/" + id).then(result => result.data);
  },
  // Saves ingredients to the database
  saveIngredients: function (recipeData) {
    return axios.post("/api/recipes/ingredients", recipeData).then(result => result.data);
  },
  // Get the saved ingredients from the database
  savedIngredients: function () {
    return axios.get("/api/recipes/ingredients").then(result => result.data);
  }
};