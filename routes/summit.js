const express = require('express');
const summitController = require('../controllers/summitController');

const router = express.Router();

// Create a new summit
router.post('/', summitController.createSummit);

// Get all summits
router.get('/', summitController.getAllSummits);

// Get a single summit by ID
router.get('/:id', summitController.getSummitById);

// Update a summit by ID
router.put('/:id', summitController.updateSummit);

// Delete a summit by ID
router.delete('/:id', summitController.deleteSummit);

module.exports = router;