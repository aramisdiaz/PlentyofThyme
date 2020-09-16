const router = require("express").Router();
const recipesController = require("../../controllers/recipesController");

// Matches with "/api/recipes"
router.route("/")
  .get(recipesController.findAll)
  .post(recipesController.create);

// Matches with "/api/recipes/:id"
router
  .route("/:id")
  .get(recipesController.findById)
  .put(recipesController.update)
  .delete(recipesController.remove);

router.route("/ingredients")
  .get(recipesController.findAllIng)
  .post(recipesController.createIng);

// Matches with "/api/recipes/:id"
router
  .route("/ingredients/:id")
  .get(recipesController.findByIngId)
  .put(recipesController.updateIng)
  .delete(recipesController.removeIng);




module.exports = router;