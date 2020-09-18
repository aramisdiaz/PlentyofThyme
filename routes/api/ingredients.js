const router = require("express").Router();
const passport = require("passport");
const ingredientsController = require("../../controllers/ingredientsController");

// Matches with "/api/ingredients"
router.route("/", passport.authenticate("/", {scope: ["profile"]}))
  .get(ingredientsController.findAllIng)
  .post(ingredientsController.createIng);

// Matches with "/api/ingredients/:id"
router
  .route("/:id", passport.authenticate("/:id", {scope: ["profile"]}))
  .get(ingredientsController.findByIngId)
  .put(ingredientsController.updateIng)
  .delete(ingredientsController.removeIng);

//module.exports = router;