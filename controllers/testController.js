const asyncHandler = require("../middleware/asyncHandler");
const Test = require("../models/testModel");
const Question = require("../models/questionModel");
const mongoose = require('mongoose');

// @desc Create a new test or quizs
// @route POST /api/tests
// @access Public
const createTest = asyncHandler(async (req, res) => {
  const { name, description, questions, datetime, time_limit } = req.body;
  let questionArray;

  if (!questions || !Array.isArray(questions)) {
    res.status(400);
    throw new Error("Provide an array of question IDs");
  }

  const questionIds = questions.map((questionId) => new mongoose.Types.ObjectId(questionId));

  questionArray = await Question.find({ _id: { $in: questionIds } });

  const test = await Test.create({
    name,
    description,
    questions: questionArray.map((question) => question._id),
    datetime,
    time_limit,
  });

  test.save();

  if (test) {
    res.status(201).json({
      _id: test._id,
      name: test.name,
      description: test.description,
      questions: questionArray,
      datetime: test.datetime,
      time_limit: test.time_limit,
    });
  } else {
    res.status(400);
    throw new Error("Invalid test data");
  }
});

// @desc    Update classroom
// @route   PUT /api/tests/:id
// @access  Private
const updateTest = asyncHandler(async (req, res) => {
  const test = await Test.findById(req.params.testId);

  if (test) {
    test.name = req.body.name || test.name;
    test.description = req.body.description || test.description;
    test.questions = req.body.questions || test.questions;
    // test.datetime = req.body.datetime || test.datetime;
    test.datetime = new Date();
    test.time_limit = req.body.time_limit || test.time_limit;

    const updatedTest = await test.save();

    res.json({
      _id: updatedTest._id,
      name: updatedTest.name,
      description: updatedTest.description,
      questions: updatedTest.questions,
      datetime: updatedTest.datetime,
      time_limit: updatedTest.time_limit,
    });
  } else {
    res.status(404);
    throw new Error('Test not found');
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
  updateTest,
  getTestById,
};
