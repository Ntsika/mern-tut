const express = require("express");
const { getUser, updateUser } = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Public
router.get("/profile", protect, getUser);

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Public
router.put("/profile", protect, updateUser);

module.exports = router;
