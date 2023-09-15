const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const TestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a test name!"],
    },

    description: {
        type: String,
        required: false,
    },
    
    numQuestions: {
        type: Number,
        required: true,
    },

    startDate: {
        //  to do
    },

    endDate: {
        // to do
    },

    question_ids: {
        type: Array,
        required: true,
    },
})

module.exports = mongoose.model.Tests || mongoose.model("Tests", TestSchema);