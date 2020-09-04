
import axios from "axios";

export default {
  getBook: function (query) {
    return axios.get(`https://api.edamam.com/search?q=${query}&app_id=1fc1ea16&app_key=f3b241fe336a5fbbd2f3053451e1c4b9`);
  },
  //"https://api.edamam.com/search?q=${query}&app_id=1fc1ea16&app_key=f3b241fe336a5fbbd2f3053451e1c4b9"
  //https://www.googleapis.com/books/v1/volumes?q=${query}
  // Deletes the book with the given id
  deleteBook: function (id) {
    console.log(id);
    return axios.delete("/api/books/" + id).then(result => result.data);
  },
  // Saves a recipe to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData).then(result => result.data);
  },
  // Get the saved recipes from the database
  savedBooks: function () {
    return axios.get("/api/books").then(result => result.data);
  }/*,
  deleteIngredients: function (id) {
    console.log(id);
    return axios.delete("/api/ingredients/" + id).then(result => result.data);
  },
  // Saves ingredients to the database
  saveIngredients: function (ingredientData) {
    return axios.post("/api/ingredients", ingredientData).then(result => result.data);
  },
  // Get the saved ingredients from the database
  savedIngredients: function () {
    return axios.get("/api/ingredients").then(result => result.data);
  }*/
};