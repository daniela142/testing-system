const express = require('express');
const {
    createTest,
    getTests,
    getTestById,
    updateTest,
} = require('../controllers/testController');

const router = express.Router();

router.route('/').post(createTest).get(getTests);

router
    .route('/:testId')
    .get(getTestById)
    .put(updateTest)


module.exports = router;

