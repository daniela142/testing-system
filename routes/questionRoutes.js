const express = require("express");
const {
  createQuestion,
  getQuestions,
  deleteQuestion,
  getQuestionById,
} = require("../controllers/questionController");
const { protect, teacher, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(createQuestion).get(getQuestions);

router
  .route("/:questionId")
  .delete(protect, deleteQuestion)
  .get(getQuestionById);

module.exports = router;
