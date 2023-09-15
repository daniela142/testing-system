const asyncHandler = require('../middleware/asyncHandler');
const Test = require('../models/testModel');

// @desc Create a new test
// @route POST /api/tests
// @access Public
const createTest = asyncHandler(async (req, res) => {
    const { name, code, description, coordinator, student_ids, test_ids } = req.body;

    const testExists = await Test.findOne({ code });

    if (testExists) {
        res.status(400);
        throw new Error('Test already exists');
    }

    const test = await Test.create({
        name,
        code,
        description,
        coordinator,
        student_ids,
        test_ids,
    });

    test.save();

    if (test) {
        res.status(201).json({
            _id: test._id,
            name: test.name,
            description: test.description,
            numQuestions: test.numQuestions,
            startDate: test.startDate,
            endDate: test.endDate,
            question_ids: test.question_ids,
        });
    } else {
        res.status(400);
        throw new Error('Invalid test data');
    }
});


// @desc Get test
// @route GET /api/tests/info
// @access Private
const getTest = asyncHandler(async (req, res) => {
    const test = await Test.findById(req.test._id);

    if (test) {
        res.json({
            _id: test._id,
            name: test.name,
            description: test.description,
            numQuestions: test.numQuestions,
            startDate: test.startDate,
            endDate: test.endDate,
            question_ids: test.question_ids,
        });
    } else {
        res.status(404);
        throw new Error('Test not found');
    }
});

// @desc Get all tests
// @route GET /api/tests
// @access Private/Admin
const getTests = asyncHandler(async (req, res) => {
    const tests = await Test.find({});
    res.json(tests);
})

// @desc Delete test
// @route DELETE /api/tests/:id
// access Private/Admin
const deleteTest = asyncHandler(async (req, res) => {
    const test = await Test.findById(req.params.testId);

    if (test) {
        await Test.deleteOne({ _id: test._id });
        res.json({ message: 'Test removed' });
    } else {
        res.status(404);
        throw new Error('Test not found');
    }
});

// @desc Get test by ID
// @route GET /api/tests/:id
// @access Private/Admin
const getTestById = asyncHandler(async (req, res) => {
    const test = await Test.findById(req.params.testId);

    if (test) {
        res.json(test);
    } else {
        res.status(404);
        throw new Error('Test not found');
    }
});

// @desc    Update test
// @route   PUT /api/tests/:id
// @access  Private
const updateTest = asyncHandler(async (req, res) => {
    const test = await Test.findById(req.params.testId);

    if (test) {
        test.name = req.body.name || test.name;
        test.description = req.body.description || test.description;
        test.numQuestions = req.body.numQuestions || test.numQuestions;
        test.startDate = req.body.startDate || test.startDate;
        test.endDate = req.body.endDate || test.endDate;
        test.question_ids = req.body.question_ids || test.question_ids;

        const updatedTest = await test.save();

        res.json({
            _id: updatedTest._id,
            name: updatedTest.name,
            description: updatedTest.description,
            numQuestions: updatedTest.numQuestions,
            startDate: updatedTest.startDate,
            endDate: updatedTest.endDate,
            question_ids: updatedTest.question_ids,
        });
    } else {
        res.status(404);
        throw new Error('Test not found');
    }
});

module.exports = {
    createTest,
    getTest,
    getTests,
    deleteTest,
    getTestById,
    updateTest,
}