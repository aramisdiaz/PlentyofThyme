const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    _id: { type: String },
    label: { type: String }
  //amount: { type: Int }
});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);


module.exports = Ingredient;