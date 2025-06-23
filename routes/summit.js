const express = require('express');
const { body, param, validationResult } = require('express-validator');
const summitController = require('../controllers/summitController');

const router = express.Router();

// Validation middleware
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Validation rules for summit creation and update
const summitValidation = [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('date').isISO8601().withMessage('Valid date is required')
];

// Create a new summit
router.post(
    '/createSummit',
    summitValidation,
    validate,
    summitController.createSummit
);

// Get all summits
router.get('/getAllSummits', summitController.getAllSummits);

// Get a single summit by ID
router.get(
    '/getSummitById:id',
    param('id').isMongoId().withMessage('Invalid summit ID'),
    validate,
    summitController.getSummitById
);

// Update a summit by ID
router.put(
    '/updateSummit/:id',
    [
        param('id').isMongoId().withMessage('Invalid summit ID'),
        ...summitValidation
    ],
    validate,
    summitController.updateSummit
);

// Delete a summit by ID
router.delete(
    '/deleteSummit/:id',
    param('id').isMongoId().withMessage('Invalid summit ID'),
    validate,
    summitController.deleteSummit
);

module.exports = router;