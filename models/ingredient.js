const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  _id: { type: String },
  ingredients: { type: Array }
  //amount: { type: Int }
});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);


module.exports = Ingredient;