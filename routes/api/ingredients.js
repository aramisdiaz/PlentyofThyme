const router = require("express").Router();
const ingredientsController = require("../../controllers/ingredientsController");

// Matches with "/api/ingredients"
router.route("/")
  .get(ingredientsController.findAllIng)
  .post(ingredientsController.createIng);

// Matches with "/api/ingredients/:id"
router
  .route("/:id")
  .get(ingredientsController.findByIngId)
  .put(ingredientsController.updateIng)
  .delete(ingredientsController.removeIng);

//module.exports = router;