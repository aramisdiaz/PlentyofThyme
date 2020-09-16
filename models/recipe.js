const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    _id: { type: String },
    label: { type: String },
    ingredients: { type: Array },
    source: { type: String },
    image: { type: String },
    link: { type: String }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
