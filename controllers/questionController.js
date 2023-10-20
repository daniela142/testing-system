const asyncHandler = require('../middleware/asyncHandler');
const Question = require('../models/questionModel');
const Test = require("../models/testModel");

const questionSelection = require('../services/questionSelection');

// @desc Create a new question
// @route POST /api/questions
// @access Public
const createQuestion = asyncHandler(async (req, res) => {
    const { name, imageUrl, type, answers, elo } = req.body;

    const question = await Question.create({
        name,
        imageUrl,
        type,
        answers,
        elo
    });

    question.save();

    if (question) {
        res.status(201).json({
            _id: question._id,
            name: question.name,
            imageUrl: question.imageUrl,
            type: question.type,
            answers: question.answers,
            elo: question.elo,
        });
    } else {
        res.status(400);
        throw new Error('Invalid question data');
    }
});

// @desc Get all questions
// @route GET /api/questions
// @access Public
const getQuestions = asyncHandler(async (req, res) => {
    const questions = await Question.find({});
    res.json(questions);
})

// @desc Delete question
// @route DELETE /api/questions/:id
// access Private/Admin
// const deleteQuestion = asyncHandler(async (req, res) => {
//     const question = await Question.findById(req.params.questionId);

//     if (question) {
//         await Question.deleteOne({ _id: question._id });
//         res.json({ message: 'Question removed' });
//     } else {
//         res.status(404);
//         throw new Error('Question not found');
//     }
// });

// @desc Get question by ID
// @route GET /api/questions/:id
// @access Public
const getQuestionById = asyncHandler(async (req, res) => {
    const question = await Question.findById(req.params.questionId);

    if (question) {
        res.json(question);
    } else {
        res.status(404);
        throw new Error('Question not found');
    }
});

// @desc    select user question
// @route   GET /api/questions/generate
// @access  Private
const generateQuestion = asyncHandler(async (req, res) => {
    // let updatedQuestion = questionSelection.questionSelector(req.params.elo);
    
    const {testId} = req.body;
    const test = await Test.findById(testId).populate('questions');

    const questions = test['questions']

    const questionPool = questions.filter((question) => question.elo <= req.params.elo && question.elo >= req.params.elo - 100)
    
    const selectedQuestion = questionPool[Math.floor(Math.random() * questionPool.length)];

    res.json({
        selectedQuestion
    })
})

module.exports = {
    createQuestion,
    getQuestions,
    getQuestionById,
    generateQuestion
}