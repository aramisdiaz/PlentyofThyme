const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/plentyofthyme"
);

const bookSeed =
{
    source: ["The Daily Meal"],
    image: "https://www.edamam.com/web-img/b7c/b7c5efd59e548df9fd3fc8895937728c.jpg",
    link: "http://www.thedailymeal.com/recipes/cheesy-sloppy-joes-recipe-0",
    label: "Pad Thai",
}


db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });