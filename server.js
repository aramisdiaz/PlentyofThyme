const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");


const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
require('dotenv').config({ path: '.env' });


// Define API routes here
app.use(routes)


// Connect to the Mongo DB
mongoose.connect(process.env.REACT_APP_MONGODB_URI, { useNewUrlParser: true });
console.log(process.env.PORT)

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});