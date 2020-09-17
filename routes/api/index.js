const router = require("express").Router();
const bookRoutes = require("./books");
//const ingredientRoutes = require("./ingredients")

// Book routes
router.use("/books", bookRoutes);
//router.use("/ingredients", ingredientRoutes)

module.exports = router;