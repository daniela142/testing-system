const express = require('express');
const {
    createClassroom,
    getClassroom,
    getClassrooms,
    deleteClassroom,
    getClassroomById,
    updateClassroom,
} = require('../controllers/classroomController');
const { protect, teacher, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(createClassroom).get(protect, teacher, getClassrooms);

router
    .route('/info')
    .get(getClassroom)
    .put(updateClassroom);

router
    .route('/:classroomId')
    .delete(deleteClassroom)
    .get(getClassroomById)
    .put(updateClassroom);
    // .get(protect, getClassroomById)
    // .put(protect, updateClassroom);


module.exports = router;

