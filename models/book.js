const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    _id: { type: String },
    label: { type: String },
    ingredients: { type: Array },
    source: { type: String },
    image: { type: String },
    link: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;