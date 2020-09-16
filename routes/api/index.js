const router = require("express").Router();
const recipeRoutes = require("./recipes");
const healthTrackerRoutes = require("./healthTracker");
//const ingredientRoutes = require("./ingredients")

// Recipe routes
router.use("/healthTracker", healthTrackerRoutes);
router.use("/recipes", recipeRoutes);
//router.use("/ingredients", ingredientRoutes)

module.exports = router;