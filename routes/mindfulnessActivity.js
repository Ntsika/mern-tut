const express = require('express');
const { body, param } = require('express-validator');
const mindfulnessActivityController = require('../controllers/mindfulnessActivityController');

const router = express.Router();

// Validation rules
const activityValidation = [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('duration').isInt({ min: 1 }).withMessage('Duration must be a positive integer')
];

// Create a new mindfulness activity
router.post(
    '/createMindfulnessActivity',
    activityValidation,
    mindfulnessActivityController.createMindfulnessActivity
);

// Get all mindfulness activities
router.get('/getAllMindfulnessActivities', mindfulnessActivityController.getAllMindfulnessActivities);

// Get a single mindfulness activity by ID
router.get(
    '/getMindfulnessActivityById:id',
    param('id').isMongoId().withMessage('Invalid activity ID'),
    mindfulnessActivityController.getMindfulnessActivityById
);

// Update a mindfulness activity by ID
router.put(
    '/updateMindfulnessActivity:id',
    [
        param('id').isMongoId().withMessage('Invalid activity ID'),
        ...activityValidation
    ],
    mindfulnessActivityController.updateMindfulnessActivity
);

// Delete a mindfulness activity by ID
router.delete(
    '/deleteMindfulnessActivity:id',
    param('id').isMongoId().withMessage('Invalid activity ID'),
    mindfulnessActivityController.deleteMindfulnessActivity
);

module.exports = router;