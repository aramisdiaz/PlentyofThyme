const router = require("express").Router();
const booksController = require("../../controllers/booksControllers");

// Matches with "/api/ingredients"
router.route("/")
  .get(booksController.findAllIng)
  .post(booksController.createIng);

// Matches with "/api/ingredients/:id"
router
  .route("/:id")
  .get(booksController.findByIngId)
  .put(booksController.updateIng)
  .delete(booksController.removeIng);

//module.exports = router;