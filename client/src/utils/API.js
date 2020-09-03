
import axios from "axios";

export default {
  getBook: function (query) {
    return axios.get(`https://api.edamam.com/search?q=${query}&app_id=1fc1ea16&app_key=f3b241fe336a5fbbd2f3053451e1c4b9`);
  },
  //"https://api.edamam.com/search?q=${query}&app_id=1fc1ea16&app_key=f3b241fe336a5fbbd2f3053451e1c4b9"
  //https://www.googleapis.com/books/v1/volumes?q=${query}
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id).then(result => result.data);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData).then(result => result.data);
  },
  // Get the saved a books from the database
  savedBooks: function () {
    return axios.get("/api/books").then(result => result.data);
  }
};