const express = require('express');
const {
    createQuestion,
    getQuestion,
    getQuestions,
    deleteQuestion,
    getQuestionById,
    updateQuestion,
} = require('../controllers/questionController');
const { protect, teacher, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(createQuestion).get(protect, teacher, getQuestions);

router
    .route('/info')
    .get(protect, getQuestion)
    .put(protect, updateQuestion);

router
    .route('/:questionId')
    .delete(protect, teacher, deleteQuestion)
    .get(protect, getQuestionById)
    .put(protect, updateQuestion);


module.exports = router;

