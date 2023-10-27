const asyncHandler = require('../middleware/asyncHandler');
const generateToken = require('../utils/generateToken');
const User = require('../models/userModel');

const eloCalculator = require('../services/eloCalculator');

// @desc Auth user & get token
// @route POST /api/users/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id);

        res.json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            elo: user.elo,
            tempElo: user.tempElo,
            untestedPeriod: user.untestedPeriod,
            usertype: user.usertype,
            classroom_ids: user.classroom_ids,
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});


// @desc Register a new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { firstname, lastname, email, password, elo, tempElo, untestedPeriod, usertype, classroom_ids } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        firstname,
        lastname,
        email,
        password,
        elo,
        tempElo,
        untestedPeriod,
        usertype,
        classroom_ids,
    });

    user.save();

    if (user) {
        generateToken(res, user._id);

        res.status(201).json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            elo: user.elo,
            tempElo: user.tempElo,
            untestedPeriod: user.untestedPeriod,
            usertype: user.usertype,
            classroom_ids: user.classroom_ids,
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc Logout user / clear cookie
// @route POST /api/users/logout
// @access Public
const logoutUser = (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
        sameSite: 'None',
        secure: true,
    });
    res.status(200).json({ message: 'Logged out successfully' });
}

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            elo: user.elo,
            tempElo: user.tempElo,
            untestedPeriod: user.untestedPeriod,
            usertype: user.usertype,
            classroom_ids: user.classroom_ids,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        user.firstname = req.body.firstname || user.firstname;
        user.lastname = req.body.lastname || user.lastname;
        user.email = req.body.email || user.email;
        user.untestedPeriod = req.body.untestedPeriod || user.untestedPeriod;
        user.usertype = req.body.usertype || user.usertype;
        user.classroom_ids = req.body.classroom_ids || user.classroom_ids;


        if (req.body.password) {
            user.password = req.body.password;
        }

        if (req.body.elo && req.body.questionElo && req.body.answeredCorrect) {
            let userElo = eloCalculator.updateTempElo(req.body.elo, req.body.questionElo, req.body.answeredCorrect)
            user.elo = userElo || user.elo;
        }

        if (req.body.tempElo && req.body.questionElo && req.body.answeredCorrect) {
            let userElo = eloCalculator.updateTempElo(req.body.tempElo, req.body.questionElo, req.body.answeredCorrect)
            user.tempElo = userElo || user.tempElo;
        }

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            firstname: updatedUser.firstname,
            lastname: updatedUser.lastname,
            email: updatedUser.email,
            elo: updatedUser.elo,
            tempElo: updatedUser.tempElo,
            usertype: updatedUser.usertype,
            untestedPeriod: updatedUser.untestedPeriod,
            classroom_ids: updatedUser.classroom_ids,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc Get all users
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
})

// @desc Delete user
// @route DELETE /api/users/:id
// access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        await User.deleteOne({ _id: user._id });
        res.json({ message: 'User removed' });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc Get user by ID
// @route GET /api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');

    if (user) {
        res.json(user);
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

module.exports = {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
}