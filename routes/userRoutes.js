const express = require('express');
const {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/auth', authUser);
router.post('/logout', logoutUser);

router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, getUserById)
    .put(protect, updateUser);


module.exports = router;

