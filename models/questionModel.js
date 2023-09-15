const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const QuestionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a test name!"],
    },

    imageUrl: {
        type: String,
        required: false,
    },

    type: {
        type: String,
        required: [true, "Please provide a question type"],
    },

    answers: {
        type: Array,
        required: [true, "Please provide a question answer"],
    },

    questionElo: {
        // min is 0, max is 1000, 
        type: Number,
        required: [true, "Please provide an elo"],
    }
})

module.exports = mongoose.model.Questions || mongoose.model("Questions", QuestionSchema);