const asyncHandler = require('../middleware/asyncHandler');
const Question = require('../models/questionModel');

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


// @desc Get question
// @route GET /api/questions/info
// @access Private
const getQuestion = asyncHandler(async (req, res) => {
    const question = await Question.findById(req.question._id);

    if (question) {
        res.json({
            _id: question._id,
            name: question.name,
            imageUrl: question.imageUrl,
            type: question.type,
            answers: question.answers,
            elo: question.elo,
        });
    } else {
        res.status(404);
        throw new Error('Question not found');
    }
});

// @desc Get all questions
// @route GET /api/questions
// @access Private/Admin
const getQuestions = asyncHandler(async (req, res) => {
    const questions = await Question.find({});
    res.json(questions);
})

// @desc Delete question
// @route DELETE /api/questions/:id
// access Private/Admin
const deleteQuestion = asyncHandler(async (req, res) => {
    const question = await Question.findById(req.params.questionId);

    if (question) {
        await Question.deleteOne({ _id: question._id });
        res.json({ message: 'Question removed' });
    } else {
        res.status(404);
        throw new Error('Question not found');
    }
});

// @desc Get question by ID
// @route GET /api/questions/:id
// @access Private/Admin
const getQuestionById = asyncHandler(async (req, res) => {
    const question = await Question.findById(req.params.questionId);

    if (question) {
        res.json(question);
    } else {
        res.status(404);
        throw new Error('Question not found');
    }
});

// @desc    Update question
// @route   PUT /api/questions/:id
// @access  Private
const updateQuestion = asyncHandler(async (req, res) => {
    const question = await Question.findById(req.params.questionId);

    if (question) {
        question.name = req.body.name || question.name;
        question.imageUrl = req.body.imageUrl || question.imageUrl;
        question.type = req.body.type || question.type;
        question.answers = req.body.answers || question.answers;
        question.elo = req.body.elo || question.elo;


        const updatedQuestion = await question.save();

        res.json({
            _id: updatedQuestion._id,
            name: updatedQuestion.name,
            imageUrl: updatedQuestion.imageUrl,
            type: updatedQuestion.type,
            answers: updatedQuestion.answers,
            elo: updatedQuestion.elo,
        });
    } else {
        res.status(404);
        throw new Error('Question not found');
    }
});

module.exports = {
    createQuestion,
    getQuestion,
    getQuestions,
    deleteQuestion,
    getQuestionById,
    updateQuestion,
}