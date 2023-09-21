const asyncHandler = require('../middleware/asyncHandler');
const Classroom = require('../models/classroomModel');

// @desc Create a new classroom
// @route POST /api/classrooms
// @access Public
const createClassroom = asyncHandler(async (req, res) => {
    const { name, code, description, coordinator, student_ids, test_ids } = req.body;

    const classroomExists = await Classroom.findOne({ code });

    if (classroomExists) {
        res.status(400);
        throw new Error('Classroom already exists');
    }

    const classroom = await Classroom.create({
        name, 
        code, 
        description, 
        coordinator, 
        student_ids, 
        test_ids,
    });

    classroom.save();

    if (classroom) {
        res.status(201).json({
            _id: classroom._id,
            name: classroom.name,
            code: classroom.code,
            description: classroom.description,
            coordinator: classroom.coordinator,
            student_ids: classroom.student_ids,
            test_ids: classroom.test_ids,
        });
    } else {
        res.status(400);
        throw new Error('Invalid classroom data');
    }
});


// @desc Get classroom
// @route GET /api/classrooms/info
// @access Private
const getClassroom = asyncHandler(async (req, res) => {
    //const classroom = await Classroom.find({});
    const classroom = await Classroom.findById(req.user._id);
    
    if (classroom) {
        res.send(classroom);
    } else {
        res.status(404);
        throw new Error('Classroom not found');
    }
});

// @desc Get all classrooms
// @route GET /api/classrooms
// @access Private/Teacher
const getClassrooms = asyncHandler(async (req, res) => {
    const classrooms = await Classroom.find({});
    res.json(classrooms);
})

// @desc Delete classroom
// @route DELETE /api/classrooms/:id
// access Private/Teacher
const deleteClassroom = asyncHandler(async (req, res) => {
    const classroom = await Classroom.findById(req.params.classroomId);

    if (classroom) {
        await Classroom.deleteOne({ _id: classroom._id });
        res.json({ message: 'Classroom removed' });
    } else {
        res.status(404);
        throw new Error('Classroom not found');
    }
});

// @desc Get classroom by ID
// @route GET /api/classrooms/:id
// @access Private/Admin
const getClassroomById = asyncHandler(async (req, res) => {
    const classroom = await Classroom.findById(req.params.classroomId);

    if (classroom) {
        res.json(classroom);
    } else {
        res.status(404);
        throw new Error('Classroom not found');
    }
});

// @desc    Update classroom
// @route   PUT /api/classrooms/:id
// @access  Private
const updateClassroom = asyncHandler(async (req, res) => {
    const classroom = await Classroom.findById(req.params.classroomId);

    if (classroom) {
        classroom.name = req.body.name || classroom.name;
        classroom.code = req.body.code || classroom.code;
        classroom.description = req.body.description || classroom.description;
        classroom.coordinator = req.body.coordinator || classroom.coordinator;
        classroom.student_ids = req.body.student_ids || classroom.student_ids;
        classroom.test_ids = req.body.test_ids || classroom.test_ids;

        const updatedClassroom = await classroom.save();

        res.json({
            _id: updatedClassroom._id,
            name: updatedClassroom.name,
            code: updatedClassroom.code,
            description: updatedClassroom.description,
            coordinator: updatedClassroom.coordinator,
            student_ids: updatedClassroom.student_ids,
            test_ids: updatedClassroom.test_ids,
        });
    } else {
        res.status(404);
        throw new Error('Classroom not found');
    }
});

module.exports = {
    createClassroom,
    getClassroom,
    getClassrooms,
    deleteClassroom,
    getClassroomById,
    updateClassroom,
}