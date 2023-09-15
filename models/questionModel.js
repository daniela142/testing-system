const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const QuestionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a question name!"],
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

    elo: {
        type: Number,
        min: 0,
        max: 1000,
        required: [true, "Please provide an elo"],
    }
})

module.exports = mongoose.model.Questions || mongoose.model("Questions", QuestionSchema);