const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const ClassroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a class name!"],
    },

    description: {
        type: String,
        required: false,
    },

    coordinator: {
        type: String,
        required: [true, "Please provide a first name!"],
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