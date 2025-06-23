const express = require('express');
const { body, param, validationResult } = require('express-validator');
const speakerController = require('../controllers/speakerController');

const router = express.Router();

// Validation middleware
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Validation rules
const speakerValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('bio').notEmpty().withMessage('Bio is required'),
    body('topic').notEmpty().withMessage('Topic is required')
];

// Get all speakers
router.get('/getAllSpeakers', speakerController.getAllSpeakers);

// Get a single speaker by ID
router.get(
    '/getSpeakerById:id',
    param('id').isMongoId().withMessage('Invalid speaker ID'),
    validate,
    speakerController.getSpeakerById
);

// Create a new speaker
router.post(
    '/createSpeaker',
    speakerValidation,
    validate,
    speakerController.createSpeaker
);

// Update a speaker by ID
router.put(
    '/update/updateSpeaker:id',
    [
        param('id').isMongoId().withMessage('Invalid speaker ID'),
        ...speakerValidation
    ],
    validate,
    speakerController.updateSpeaker
);

// Delete a speaker by ID
router.delete(
    '/deleteSpeaker/:id',
    param('id').isMongoId().withMessage('Invalid speaker ID'),
    validate,
    speakerController.deleteSpeaker
);

module.exports = router;