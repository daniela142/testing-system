const express = require('express');
const {
    createTest,
    getTests,
    getTestById,
} = require('../controllers/testController');

const router = express.Router();

router.route('/').post(createTest).get(getTests);

router
    .route('/:testId')
    .get(getTestById)


module.exports = router;

