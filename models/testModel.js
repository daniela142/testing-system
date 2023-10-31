const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a test name!"],
    },
    
    description: {
        type: String,
        required: false,
    },

    datetime: {
        type: Date,
        required: true,
        default: Date.now,
    },

    time_limit: {
        type: Number,
        required: true,
        default: 60,
    },

    questions: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Questions"
        }],
        required: true,
    },
})

module.exports = mongoose.model.Tests || mongoose.model("Tests", TestSchema);