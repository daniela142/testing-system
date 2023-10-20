const express = require("express");
const {
  createQuestion,
  getQuestions,
  getQuestionById,
  generateQuestion,
} = require("../controllers/questionController");

const router = express.Router();

router.route("/").post(createQuestion).get(getQuestions);

router
  .route('/generate/:elo')
  .get(generateQuestion)

router
  .route("/:questionId")
  .get(getQuestionById);

module.exports = router;
