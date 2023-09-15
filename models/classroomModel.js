const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const User = require('../models/userModel');

const ClassroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a class name!"],
    },

    code: {
        type: String,
        required: [true, "Please provide a class code!"],
    },

    description: {
        type: String,
        required: false,
    },

    coordinator_id: {
        type: String,
        required: [true, "Please provide a user id!"],
        required: false,
    },

    student_ids: {
        type: Array,
        required: true,
    },

    test_ids: {
        type: Array,
        required: true,
    },
})

module.exports = mongoose.model.Classrooms || mongoose.model("Classrooms", ClassroomSchema);