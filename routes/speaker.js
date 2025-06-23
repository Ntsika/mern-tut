const express = require('express');
const speakerController = require('../controllers/speakerController');

const router = express.Router();

// Get all speakers
router.get('/', speakerController.getAllSpeakers);

// Get a single speaker by ID
router.get('/:id', speakerController.getSpeakerById);

// Create a new speaker
router.post('/', speakerController.createSpeaker);

// Update a speaker by ID
router.put('/:id', speakerController.updateSpeaker);

// Delete a speaker by ID
router.delete('/:id', speakerController.deleteSpeaker);

module.exports = router;