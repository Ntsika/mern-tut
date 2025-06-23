const express = require('express');
const mindfulnessActivityController = require('../controllers/mindfulnessActivity');

const router = express.Router();

// Create a new mindfulness activity
router.post('/', mindfulnessActivityController.createMindfulnessActivity);

// Get all mindfulness activities
router.get('/', mindfulnessActivityController.getAllMindfulnessActivities);

// Get a single mindfulness activity by ID
router.get('/:id', mindfulnessActivityController.getMindfulnessActivityById);

// Update a mindfulness activity by ID
router.put('/:id', mindfulnessActivityController.updateMindfulnessActivity);

// Delete a mindfulness activity by ID
router.delete('/:id', mindfulnessActivityController.deleteMindfulnessActivity);

module.exports = router;