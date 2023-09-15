const express = require('express');
const {
    createTest,
    getTest,
    getTests,
    deleteTest,
    getTestById,
    updateTest,
} = require('../controllers/testController');
const { protect, teacher, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(createTest).get(protect, teacher, getTests);

router
    .route('/info')
    .get(protect, getTest)
    .put(protect, updateTest);

router
    .route('/:testId')
    .delete(protect, teacher, deleteTest)
    .get(protect, getTestById)
    .put(protect, updateTest);


module.exports = router;

