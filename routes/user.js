const express = require("express");
const { getUser, updateUser } = require("../controller/userController");
const router = express.Router();

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Public
router.get("/profile", getUser);

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Public
router.put("/profile", updateUser);

module.exports = router;
