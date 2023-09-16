const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please provide a first name!"],
        unique: false,
    },

    lastname: {
        type: String,
        required: [true, "Please provide a last name!"],
        unique: false,
    },

    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },

    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },

    elo: {
        type: Number,
        default: 500,
        min: 0,
        max: 1000,
    },
    
    isTeacher: {
        type: Boolean,
        default: false,
        required: [true, "Please choose an account type! (teacher)"],
    },

    isAdmin: {
        type: Boolean,
        default: false,
        required: [true, "Please choose an account type! (admin)"],
    },
})

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

// Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);