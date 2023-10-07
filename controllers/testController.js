const asyncHandler = require("../middleware/asyncHandler");
const Test = require("../models/testModel");
const Question = require("../models/questionModel");

// @desc Create a new test or quizs
// @route POST /api/tests
// @access Public
const createTest = asyncHandler(async (req, res) => {
  const { name, description, questions } = req.body;
  let questionArray;

  if (!questions || typeof questions === "array") {
    res.status(400);
    throw new Error("Provide array of questions");
  } else {
    questionArray = await Question.insertMany(questions);
  }

  const questionIds = questionArray.map((question) => question._id);

  const test = await Test.create({
    name,
    description,
    questions: questionIds,
  });

  test.save();

  if (test) {
    res.status(201).json({
      _id: test._id,
      name: test.name,
      description: test.description,
      questions: questionArray
    });
  } else {
    res.status(400);
    throw new Error("Invalid test data");
  }
});

// @desc Get all tests
// @route GET /api/tests
// @access Public
const getTests = asyncHandler(async (req, res) => {
  const tests = await Test.find({}).select('-questions');
  res.json(tests);
});

// @desc Delete test
// @route DELETE /api/tests/:id
// access Private/Admin
// const deleteTest = asyncHandler(async (req, res) => {
//   const test = await Test.findById(req.params.testId);

//   if (test) {
//     await Test.deleteOne({ _id: test._id });
//     res.json({ message: "Test removed" });
//   } else {
//     res.status(404);
//     throw new Error("Test not found");
//   }
// });

// @desc Get test by ID
// @route GET /api/tests/:id
// @access Public
const getTestById = asyncHandler(async (req, res) => {
  const test = await Test.findById(req.params.testId).populate('questions');

  if (test) {
    res.json(test);
  } else {
    res.status(404);
    throw new Error("Test not found");
  }
});

module.exports = {
  createTest,
  getTests,
  getTestById,
};
