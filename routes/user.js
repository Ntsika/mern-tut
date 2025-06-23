const express = require("express");
const { body, param, validationResult } = require("express-validator");
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/userController");
const router = express.Router();

// Validation middleware
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Validation rules for user creation and update
const userValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
];


// Get all users
router.get('/getAllUsers', getUsers);

// Get a single user by ID
router.get(
    '/getUserById:id',
    param('id').isMongoId().withMessage('Invalid user ID'),
    validate,
    getUser
);

// Create a new user
router.post(
    '/createUser',
    userValidation,
    validate,
    createUser
);

// Update a user by ID
router.put(
    '/updateUser/:id',
    [
        param('id').isMongoId().withMessage('Invalid user ID'),
        ...userValidation
    ],
    validate,
    updateUser
);

// Delete a user by ID
router.delete(
    '/deleteUser/:id',
    param('id').isMongoId().withMessage('Invalid user ID'),
    validate,
    deleteUser
);

module.exports = router;
