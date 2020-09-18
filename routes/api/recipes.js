const router = require("express").Router();
const passport = require("passport");
const recipesController = require("../../controllers/recipesController");

// Matches with "/api/recipes"
router.route("/", passport.authenticate("/", {scope: ["profile"]}))
  .get(recipesController.findAll)
  .post(recipesController.create);

// Matches with "/api/recipes/:id"
router
  .route("/:id", passport.authenticate("/:id", {scope: ["profile"]}))
  .get(recipesController.findById)
  .put(recipesController.update)
  .delete(recipesController.remove);





module.exports = router;