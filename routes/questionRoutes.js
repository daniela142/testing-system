const express = require("express");
const {
  createQuestion,
  getQuestions,
  getQuestionById,
} = require("../controllers/questionController");

const router = express.Router();

router.route("/").post(createQuestion).get(getQuestions);

router
  .route("/:questionId")
  .get(getQuestionById);

module.exports = router;
